
export const paginateProducts = (products, currentPage, itemsPerPage) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return products.slice(startIndex, startIndex + itemsPerPage);
  };
  
  export const totalPages = (totalProducts, itemsPerPage) => {
    return Math.ceil(totalProducts / itemsPerPage);
  };