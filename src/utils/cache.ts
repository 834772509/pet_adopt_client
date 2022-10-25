class LocalCache {
  setCache(key: any, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  getCache(key: any): any {
    const value = window.localStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    }
    return null;
  }

  deleteCache(key: any) {
    window.localStorage.removeItem(key);
  }

  clearCacke() {
    window.localStorage.clear();
  }
}

export default new LocalCache();
