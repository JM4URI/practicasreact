import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const personas = [
    { nombre: 'Mauricio', apellido: 'Rocha', edad: 25 },
    { nombre: 'Jesús', apellido: 'Angulo', edad: 16 },
    { nombre: 'Luis', apellido: 'Guardado', edad: 17 },
    { nombre: 'María', apellido: 'Rodríguez', edad: 30 },
    { nombre: 'Carlos', apellido: 'Fernández', edad: 14 },
    { nombre: 'Andrea', apellido: 'López', edad: 21 }
  ];

  return (
    <>
      <div>
        <h2>Lista de personas</h2>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Nombre</TableCell>
                <TableCell>Apellido</TableCell>
                <TableCell>Edad</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {personas.map((persona, index) => (
                <TableRow key={index}>
                  <TableCell>{persona.nombre}</TableCell>
                  <TableCell>{persona.apellido}</TableCell>
                  <TableCell>{persona.edad}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  )
}

export default App
