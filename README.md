# MiAppFigma

Proyecto Expo + React Native (TypeScript) generado a partir de diseños en Figma. El proyecto incluye código exportado desde Figma (mediante un plugin de exportación a React Native) y adaptado para Expo + expo-router.

## Resumen
Este repositorio combina la app Expo con los componentes y pantallas que extrajiste desde Figma. Los archivos exportados de diseño están en la carpeta `app/figma`.

## Requisitos previos
- Node.js >=16
- npm 
- Expo CLI (opcional): `npm install -g expo-cli` o usar `npx expo`

## Instalación
1. Clonar/abrir el proyecto en tu máquina.
2. Instalar dependencias:
   ```sh
   npm install
   # o
   yarn
   ```
3. Iniciar el servidor de desarrollo:
   ```sh
   npx expo start
   ```

## Comandos comunes
- Iniciar desarrollo (Metro / Expo): `npx expo start`
- Abrir en Android (emulador/dispositivo): `npm run android`
- Abrir en iOS (simulador, macOS): `npm run ios`
- Abrir en web: `npm run web`
- Lint: `npm run lint`
- Reset del proyecto (si existe): `npm run reset-project`

(Estos scripts dependen de lo configurado en `package.json`.)

## Flujo para actualizar desde Figma
1. En Figma, abre el archivo de diseño y usa el plugin de exportación a React Native que utilizaste originalmente (p. ej. un plugin de "Figma to React Native" o "Figma export").
2. Exporta o copia los componentes/pantallas como código.
3. Reemplaza/mezcla los archivos exportados en:
   - `app/figma/` — pantallas y vistas específicas generadas desde Figma.
   - `components/` — componentes reutilizables exportados.
   - `assets/` — imágenes y recursos exportados desde Figma.
4. Ajusta imports y estilos TypeScript si el plugin generó código JS plano.
5. Ejecuta `npx expo start` y prueba en los targets (Android/iOS/Web).


Consejo: mantén un directorio claro para lo que proviene directamente del exportador (ej. `app/figma`) para poder localizar y sobrescribir cambios de diseño sin perder código manual escrito.

## Estructura relevante
- app/ — rutas y pantallas; `app/figma/` contiene las vistas importadas desde Figma.
- components/ — componentes reutilizables y adaptaciones del código exportado.
- assets/ — imágenes y recursos (reemplazar con las exportaciones de Figma).
- hooks/, constants/, scripts/ — utilidades y configuración del proyecto.

## Notas importantes
- El código exportado desde Figma suele necesitar revisión y limpieza manual (nombres de clases, optimización de estilos, uso de assets).
- TypeScript está habilitado; revisa `tsconfig.json` si el exportador generó JS.
- Se recomienda probar cada pantalla en dispositivo real y en modo web, ya que el comportamiento de layout puede variar.
