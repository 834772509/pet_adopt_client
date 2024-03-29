import { ref } from "vue";

/**
 * 加载更多数据（上拉加载更多，下拉刷新相关逻辑）
 * @param requestFn 请求数据回调函数
 * @returns 返回: dataList, loading, finished, refreshing, onRefresh, onLoad
 */
export function useLoadData(
  requestFn: (currentPage: number) => Promise<any>,
  size: number = 10
) {
  // 数据列表
  const dataList = ref([] as any[]);
  // 当前页数
  let currentPage = 0;

  const loading = ref(false);
  const finished = ref(false);
  const refreshing = ref(false);

  // 上拉刷新事件
  const onRefresh = () => {
    // 清空列表数据
    finished.value = false;
    // 将 loading 设置为 true，表示处于加载状态
    loading.value = true;
    // 重新加载数据
    onLoad();
  };

  // 下拉加载更多事件
  const onLoad = () => {
    if (refreshing.value) {
      currentPage = 0;
      dataList.value.splice(0);
      refreshing.value = false;
    }

    // 加载数据
    requestFn(currentPage)
      .then((data: any[]) => {
        if (data.length > 0) {
          dataList.value.push(...data);
          currentPage++;

          // const size = dataList.value.length / currentPage;
          finished.value = data.length < size;
        } else {
          finished.value = true;
        }
        loading.value = false;
      })
      .catch(() => {
        finished.value = true;
        loading.value = false;
      });
  };

  return { dataList, loading, finished, refreshing, onRefresh, onLoad };
}
