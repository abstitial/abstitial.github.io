const allowedTypes = ["datasets", "collection", "spaces", "prefab", "files"];

const transformUrl = (url: string): string => {
  const { dataId, dataType } = parseUrl(url);
  return `wikar.co/?${getDataTypeKey(dataType)}=${dataId}`;
};

const parseUrl = (url: string): { dataType: string; dataId: string } => {
  const parsedUrl = new URL(url);
  const pathname = parsedUrl.pathname;
  // Remove leading '/clowder"
  const [, , dataType, dataId] = pathname.split("/");
  if (dataType === undefined || dataId === undefined) {
    throw new Error(
      `URL path "${pathname}" does not match the format "/clowder/{data_type}/{id}"`
    );
  }
  if (!allowedTypes.includes(dataType)) {
    throw new Error(`Data type "${dataType}" is not supported`);
  }
  return { dataType, dataId };
};

const getDataTypeKey = (dataType: string): string => {
  return dataType.substring(0, 1);
};

export { transformUrl };
