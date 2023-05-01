  export const createQueryParams = (obj:any) =>{
      const params = new URLSearchParams(obj);
      const queryString = params.toString();
      console.log(queryString);
      return queryString
  }