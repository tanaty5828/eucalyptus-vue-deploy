function errorRouting(errorStatus, router){
  switch (errorStatus) {
    case 400:
      router.push("/400");
      break;
    case 404:
      router.push("/404");
      break;
    default:
      router.push("/500");
  }
}

export default {
  errorRouting
};
