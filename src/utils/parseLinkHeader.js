export default header => {
  if (!header || header.length === 0) {
    return {};
  }
  const links = {};

  for (const link of header.split(",")) {
    const section = link.split(";");

    const url = section[0].replace(/<(.*)>/, "$1").trim();
    const name = section[1].replace(/rel="(.*)"/, "$1").trim();
    links[name] = url;
  }
  return links;
};