export const formatDate = timestamp =>
  new Date(timestamp * 1000).toLocaleDateString("en-US", {
    hour: "numeric",
    minute: "numeric"
  });
