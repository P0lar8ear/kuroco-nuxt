// APIからデータを取得する関数
const config = useRuntimeConfig();
export const fetchFromApi = async (apiEndpoint, params = {}) => {
  try {
    const response = await $fetch(
      `${config.public.kurocoApiDomain}${apiEndpoint}`,
      {
        credentials: "include",
        params,
      }
    );
    return response;
  } catch (error) {
    console.error(`Failed to fetch data from ${apiEndpoint}:`, error);
    throw createError({
      statusCode: 404,
      fatal: true,
    });
  }
};
