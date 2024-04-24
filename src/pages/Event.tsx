import React, { useEffect } from "react";
import AppBar from "../components/AppBar";
import { GlobalStyle } from "../GlobalStyle";
import Footer from "../components/Footer";
import { Box, Container } from "@mui/material";
import RecipeReviewCard from "../components/Card";
import { Helmet, HelmetProvider } from "react-helmet-async";
import CustomPagination from "../components/Pagination";
import { useNavigate, useLocation } from "react-router-dom";
import mockEvents from "../utils/mocks/event";

const Event: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const params = new URLSearchParams(location.search);
  let currentPage = Number(params.get("page")) || 1; // Se não houver "page" na URI, padrão é 1

  const [page, setPage] = React.useState(currentPage);
  const [events, setEvents] = React.useState<any[]>([]);
  const [totalPages, setTotalPages] = React.useState(0);
  const perPage = 3;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = mockEvents;

        if (!data) {
          return;
        }

        const startIndex = (page - 1) * perPage;
        const endIndex = startIndex + perPage;
        const eventsForPage = data.slice(startIndex, endIndex);

        const totalEvents = mockEvents.length;
        const totalPages = Math.ceil(totalEvents / perPage);

        setTotalPages(totalPages);
        setEvents(eventsForPage);
        navigate(`?page=${page}`);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [page, navigate]);

  return (
    <HelmetProvider>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          justifyContent: "space-between",
        }}
      >
        <Helmet>
          <title>Eventos</title>
        </Helmet>
        <GlobalStyle />
        <AppBar />
        <Container
          maxWidth={"xl"}
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "1rem",
            alignItems: "center",
            justifyContent: "center",
            mt: 2,
            mb: 2,
          }}
        >
          {events.map((event) => (
            <RecipeReviewCard key={event.id} event={event} />
          ))}
        </Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mb: 2,
          }}
        >
          <CustomPagination
            totalPages={totalPages}
            currentPage={page}
            setOnFatherPage={setPage}
          />
        </Box>
        <Footer />
      </Box>
    </HelmetProvider>
  );
};

export default Event;
