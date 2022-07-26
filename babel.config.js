
module.exports = (api) => {
  api.cache(true);
  
  return {
    presets: [
      require("@babel/preset-env"),
      require("@babel/preset-react"),
      require("@babel/preset-typescript")],
    plugins: [
      require("@babel/plugin-transform-runtime"),
    ],
  };
}

