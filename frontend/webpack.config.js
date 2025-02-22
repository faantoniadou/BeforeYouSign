export const module = {
  rules: [
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'], // Ensures CSS is still processed
    },
  ],
};
