import { 
  Grid, Typography, Pagination, Stack
} from "@mui/material";

import Noticia from "./Noticia";

import useNoticias from '../hooks/useNoticias';

export default function ListadoNoticias() {

  const { noticias, totalNoticias, pagina, handleChangePagina } = useNoticias();

  const totalPaginas = Math.ceil(totalNoticias/6);

  return (
    <>
      <Typography
        textAlign="center"
        marginY={5}
        variant="h3"
        componen="h2"
      >
        Últimas Noticias
      </Typography>

      <Grid 
        container
        spacing={2}
      >
        {noticias.map(noticia => (
          <Noticia 
            key={noticia.url}
            noticia={noticia}
          />
        ))}
      </Grid>

      <Stack 
        sx={{
          marginY: 5
        }}
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
          <Pagination 
            count={totalPaginas} 
            color="primary"
            onChange={handleChangePagina}
            page={pagina}
          />
      </Stack>
    </>
  )
}
