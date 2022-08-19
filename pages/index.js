import { CircularProgress, Alert, Grid } from "@mui/material";
import Layout from "../components/Layout";
import client from "../utils/client";
import { useState, useEffect } from "react";

import Carousel from "../components/Carousel";
import ProductosIndex from "../components/ProductosIndex";
import ColecionesIndex from "../components/ColecionesIndex";

export default function Home() {
  const [state, setState] = useState({
    products: [],
    error: "",
    loading: true,
  });
  const [images, setimages] = useState({ images: [] });
  const { loading, error, products } = state;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await client.fetch(`*[_type == 'product']`);
        const images = await client.fetch(`*[_type == 'images']`);
        setimages(images);
        setState({ products, loading: false });
      } catch (error) {
        setState({ loading: false, error: error.message });
      }
    };
    fetchData();
  }, []);
  const filteredT = products.filter(
    (product) => product.category === "T-Shirt"
  );
  const filteredH = products.filter(
    (product) => product.category === "Hoodies"
  );
  const filteredL = products.filter((product) => product.category === "Longs");
  return (
    <Layout>
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Alert variant="danger">{error}</Alert>
      ) : (
        <Grid container spacing={0} sx={{ justifyContent: "center" }}>
          <Grid item md={7} sx={{ justifyContent: "center" }}>
            <Carousel images={images} />
          </Grid>
          <Grid item md={12} sm={12} sx={{}}>
            <ProductosIndex
              products={products}
              filteredH={filteredH}
              filteredT={filteredT}
              filteredL={filteredL}
            />
            <ColecionesIndex />
          </Grid>
        </Grid>
      )}
    </Layout>
  );
}
