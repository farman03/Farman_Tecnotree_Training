function intersection(a, b) {
    const setA = new Set(a);
    const setB = new Set(b);
    const result = [];
    
    for (const item of setA) {
      if (setB.has(item)) {
        result.push(item);
      }
    }
    
    return result;
  }
  