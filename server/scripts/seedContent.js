const mongoose = require("mongoose");
const path = require("path");
const { pathToFileURL } = require("url");
require("dotenv").config();

const Content = require("../models/Content");

const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/aethonDB";

const marketSegments = [
  {
    id: "pharmaceuticals",
    name: "Pharmaceuticals",
    image: "/assets/segment_pharma_1769615897321.png",
    description: "Regulatory-compliant packaging solutions ensuring safety, hygiene, and precision.",
    tag: "Industry Standard",
  },
  {
    id: "nutraceuticals",
    name: "Nutraceuticals",
    image: "/assets/segment_nutra_1769616067190.png",
    description: "Protective packaging for supplements combining shelf appeal with safety.",
    tag: "Health & Wellness",
  },
  {
    id: "cosmetics",
    name: "Cosmetics",
    image: "/assets/pharma_banner_bottles_1769614352905.png",
    description: "Aesthetically pleasing and functional containers for beauty and personal care.",
    tag: "Premium Design",
  },
  {
    id: "fmcg",
    name: "FMCG",
    image: "/assets/pharma_banner_production_retry_1769615616299.png",
    description: "Durable, cost-effective packaging solutions for fast-moving consumer goods.",
    tag: "High Volume",
  },
];

const ourSegments = [
  {
    id: "pharma",
    title: "Pharmaceuticals",
    image: "/assets/segment_pharma_1769615897321.png",
    description:
      "We provide regulatory-compliant packaging solutions for the pharmaceutical industry, ensuring safety, hygiene, and precision. Our products include bottles, caps, and closures designed for various dosage forms.",
    features: ["USFDA Compliant Materials", "Clean Room Manufacturing", "Child-Resistant Options"],
  },
  {
    id: "nutra",
    title: "Nutraceuticals",
    image: "/assets/segment_nutra_1769616067190.png",
    description:
      "Our packaging for nutraceuticals and supplements combines protection with shelf appeal. We offer a wide range of containers suitable for vitamins, protein powders, and herbal supplements.",
    features: ["UV Protection", "Tamper-Evident Seals", "Custom Colors"],
  },
  {
    id: "cosmetics",
    title: "Cosmetics",
    image: "/assets/pharma_banner_bottles_1769614352905.png",
    description:
      "Premium packaging solutions for the beauty and personal care industry. We create aesthetically pleasing and functional containers for lotions, creams, and serums.",
    features: ["High-Quality Finish", "Custom Shapes", "Brand Customization"],
  },
  {
    id: "fmcg",
    title: "FMCG",
    image: "/assets/pharma_banner_production_retry_1769615616299.png",
    description:
      "Durable and cost-effective packaging for Fast Moving Consumer Goods. From household cleaners to food products, we deliver high-volume solutions without compromising quality.",
    features: ["High Volume Production", "Cost-Effective", "Durable Design"],
  },
];

const homePage = {
  slides: [
    {
      id: 1,
      image: "/assets/pharma_banner_bottles_1769614352905.png",
      title: "Your Trusted Partner in",
      subtitle: "Plastic Packaging Excellence",
      text: "Premium pharmaceutical and cosmetic packaging solutions meeting international standards.",
    },
    {
      id: 2,
      image: "/assets/pharma_banner_production_retry_1769615616299.png",
      title: "Advanced Manufacturing",
      subtitle: "State-of-the-Art Technology",
      text: "Precision engineering and clean-room facilities ensuring highest hygiene standards.",
    },
    {
      id: 3,
      image: "/assets/pharma_banner_caps_retry_1769615514861.png",
      title: "Innovative Solutions",
      subtitle: "Custom Caps & Closures",
      text: "Tailored designs to enhance brand identity and ensure product safety.",
    },
  ],
};

const run = async () => {
  await mongoose.connect(MONGO_URI);

  const productsModulePath = path.resolve(__dirname, "../../client/src/data/products.js");
  const productsModule = await import(pathToFileURL(productsModulePath).href);

  await Content.findOneAndUpdate(
    { key: "productCatalog" },
    { key: "productCatalog", title: "Product Catalog", data: productsModule.productData },
    { upsert: true, returnDocument: "after" }
  );

  await Content.findOneAndUpdate(
    { key: "marketSegments" },
    { key: "marketSegments", title: "Market Segments", data: marketSegments },
    { upsert: true, returnDocument: "after" }
  );

  await Content.findOneAndUpdate(
    { key: "ourSegments" },
    { key: "ourSegments", title: "Our Segments", data: ourSegments },
    { upsert: true, returnDocument: "after" }
  );

  await Content.findOneAndUpdate(
    { key: "homePage" },
    { key: "homePage", title: "Home Page", data: homePage },
    { upsert: true, returnDocument: "after" }
  );

  await Content.findOneAndUpdate(
    { key: "aboutPage" },
    {
      key: "aboutPage",
      title: "About Page",
      data: {
        pageTitle: "About Us",
        pageDescription:
          "We are committed to delivering reliable, compliant, and cost-effective packaging products.",
      },
    },
    { upsert: true, returnDocument: "after" }
  );

  await Content.findOneAndUpdate(
    { key: "contactPage" },
    {
      key: "contactPage",
      title: "Contact Page",
      data: {
        pageTitle: "Contact Us",
        pageDescription: "Get in touch for quotes, product inquiries, and custom manufacturing solutions.",
      },
    },
    { upsert: true, returnDocument: "after" }
  );

  console.log("Content seed complete");
  await mongoose.disconnect();
};

run().catch(async (error) => {
  console.error("Seed failed:", error.message);
  await mongoose.disconnect();
  process.exit(1);
});
