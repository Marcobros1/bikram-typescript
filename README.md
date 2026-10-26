# Bikram de TypeScript

Práctica de **20 ejercicios de dificultad progresiva** → todo en [`index.ts`](index.ts).

No hay tests: la comprobación es que **compile** y que los `console.log` muestren lo esperado.

## Compilar y ejecutar

```bash
npm install        # una vez: descarga TypeScript
npm run check      # comprueba que compila sin errores (sin generar archivos)
npm run build      # genera dist/index.js
npm start          # ejecuta el resultado
```

> Ojo: ejecuta siempre **tras `npm run build`**. `node index.ts` directo no
> funciona con este ejercicio 18 (los `enum` necesitan compilación).

## Entrega

- [x] Los 20 ejercicios resueltos, cada uno bajo su comentario `// Ejercicio N`.
- [x] Las asignaciones incorrectas pedidas (1, 8 y 15) quedan **comentadas**.
- [x] `npm run check` en verde.
- [x] Subido a GitHub → entregar la **URL del repositorio**.

**URL de entrega:** https://github.com/Marcobros1/bikram-typescript
