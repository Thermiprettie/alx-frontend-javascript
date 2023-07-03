function updateUniqueItems(map) {
  const list = map;

  if (list instanceof Map) {
    for (const [ky, vlue] of list) {
      if (vlue === 1) {
        list.set(ky, 100);
      }
    }
  } else {
    throw new Error('Cannot process');
  }
  return list;
}

export default updateUniqueItems;
