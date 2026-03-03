import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("vision", "routes/vision.tsx"),
  route("careers", "routes/careers.tsx"),
  route("features", "routes/features.tsx"),
  route("roadmap", "routes/roadmap.tsx"),
  route("pricing", "routes/pricing.tsx"),
  route("documentation", "routes/documentation.tsx"),
  route("blog", "routes/blog.tsx"),
  route("contact", "routes/contact.tsx"),
  route("founders", "routes/founders.tsx"),
  route("founders/:slug", "routes/founders.$slug.tsx"),
  route("products", "routes/products.tsx"),
  route("specular", "routes/specular._index.tsx"),
  route("specular/funding", "routes/specular.funding.tsx"),
] satisfies RouteConfig;
