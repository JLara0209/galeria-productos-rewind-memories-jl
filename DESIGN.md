# Rewind Memories — Especificación de Diseño UI/UX
**Documento Oficial de Diseño de Interfaz y Experiencia de Usuario**  
*Versión: 1.0 | Estado: Listo para maquetación e implementación frontend*

---

## 1. Identidad Visual y Concepto de Marca

### 1.1 Concepto Creativo: *Neo-Nostalgia Melódica*
**Rewind Memories** es una galería interactiva de productos personalizados que capturan recuerdos especiales a través de la música (cassettes decorativos, vinilos conmemorativos, placas acrílicas con código de canciones, cajas de música mecánicas y llaveros sonoros).

El estilo visual se define como **Retro Creativo Moderno**:
- **Retro:** Evoca la era análoga de los cassettes, discos de vinilo y tornamesas con bordes redondeados orgánicos, texturas suaves y tipografías expresivas.
- **Moderno y Juvenil:** Diseñado con espacios limpios, layout contemporáneo, microinteracciones sutiles y aire visual amplio, evitando la sobrecarga o el aspecto de "web antigua/anticuada".
- **Alegre y Delicado:** Una composición cromática pastel balanceada con acentos cálidos y un morado profundo que aporta sofisticación y contraste.

---

## 2. Sistema de Color

La paleta se fundamenta estrictamente en los cuatro tonos solicitados, complementados con tonos neutros funcionales estrictamente necesarios para asegurar legibilidad y contraste accesible (WCAG AA).

### 2.1 Paleta Principal
| Rol / Nombre | Código HEX | RGB | Función y Uso en la Interfaz |
| :--- | :--- | :--- | :--- |
| **Morado Principal** | `#744577` | `rgb(116, 69, 119)` | Títulos primarios (`h1`, `h2`), botones primarios, bordes de elementos activos, precio destacado en tarjetas y acentos de navegación. |
| **Amarillo Mantequilla** | `#F0E9B6` | `rgb(240, 233, 182)` | Fondo de tarjetas hero/destacadas, contenedores de badges cálidos, fondos secundarios y destellos sutiles de nostalgia. |
| **Verde Suave** | `#ACCFA3` | `rgb(172, 207, 163)` | Etiquetas de categoría activas, estados de confirmación, tarjetas de información secundaria y acentos delicados. |
| **Verde Turquesa** | `#84C5B1` | `rgb(132, 197, 177)` | Botones secundarios, estados *hover* interactivos, anillos de foco accesibles (`focus-visible`) e indicadores interactivos. |

### 2.2 Colores Neutros de Soporte (Legibilidad y Fondo)
| Tono | Código HEX | Función |
| :--- | :--- | :--- |
| **Crema Base (Fondo general)** | `#FAF8F5` | Fondo general de la página; un blanco roto cálido que armoniza con el amarillo mantequilla y previene el deslumbramiento. |
| **Blanco Puro** | `#FFFFFF` | Superficie de tarjetas de productos, inputs y contenedores para garantizar contraste nítido y limpieza visual. |
| **Texto Oscuro Primario** | `#2C1A2E` | Matiz morado muy profundo para párrafos y etiquetas de alta legibilidad, sustituyendo el negro absoluto artificial. |
| **Texto Secundario / Atenuado** | `#655468` | Textos secundarios, descripciones breves y placeholders. |
| **Borde Neutro Sutil** | `#E8E2D8` | Separadores y bordes sutiles de tarjetas e inputs. |

### 2.3 Matriz de Aplicación por Componente
- **Fondos de pantalla:** `#FAF8F5` (Base principal de la aplicación).
- **Tarjetas de productos:** Superficie `#FFFFFF` con borde suave `#E8E2D8` o `#F0E9B6`.
- **Botón Primario:** Fondo `#744577`, texto `#FFFFFF`. Hover en `#84C5B1` o `#5C365E`.
- **Botón Filtro Inactivo:** Fondo `#FFFFFF`, borde `1.5px solid #84C5B1`, texto `#744577`.
- **Botón Filtro Activo:** Fondo `#744577`, borde `1.5px solid #744577`, texto `#F0E9B6`.
- **Etiquetas de Categoría (Badges):** Fondo `#ACCFA3` (opacidad sólida) con texto `#2C1A2E`, o fondo `#F0E9B6` con texto `#744577`.
- **Campo de Entrada (Input precio):** Fondo `#FFFFFF`, borde `#84C5B1`, texto `#2C1A2E`, foco `#744577`.
- **Mensaje de Resultados Vacíos:** Contenedor de fondo suave `#F0E9B6` con texto `#744577` e ilustración/icono en `#84C5B1`.

---

## 3. Tipografía y Jerarquía Visual

Para transmitir el carácter retro-moderno y musical, se seleccionan dos tipografías libres de **Google Fonts**:

1. **Tipografía de Pantalla y Títulos (Display): `Syne`**
   - *Estilo:* Moderna, geométrica con curvas orgánicas distintivas y reminiscencia de portadas de discos y afiches retro contemporáneos.
   - *Pesos utilizados:* Bold (700), Extra Bold (800).
   - *Aplicación:* Logotipo, nombre de marca, encabezados de sección (`h1`, `h2`, `h3`).

2. **Tipografía de Lectura e Interfaz (Body/UI): `Plus Jakarta Sans`**
   - *Estilo:* Sans-serif contemporánea, geométrica y con alta legibilidad en pantallas pequeñas, botones y campos de formulario.
   - *Pesos utilizados:* Regular (400), Medium (500), Semi-Bold (600).
   - *Aplicación:* Textos de navegación, descripciones, precios, botones, filtros e inputs.

### 3.1 Escala Tipográfica
| Nivel / Rol | Fuente | Peso | Tamaño Desktop | Tamaño Móvil | Line Height | Uso |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Brand Logo** | Syne | 800 | `1.75rem` (28px) | `1.4rem` (22px) | 1.1 | Nombre "Rewind Memories" en cabecera |
| **H1 (Hero Title)** | Syne | 800 | `3.00rem` (48px) | `2.1rem` (34px) | 1.15 | Título principal de bienvenida |
| **H2 (Sección)** | Syne | 700 | `2.00rem` (32px) | `1.6rem` (26px) | 1.25 | Título de la galería de productos |
| **H3 (Card Title)**| Plus Jakarta Sans | 600 | `1.15rem` (18px) | `1.05rem` (17px) | 1.3 | Nombre del producto |
| **Precio** | Plus Jakarta Sans | 700 | `1.35rem` (22px) | `1.2rem` (19px) | 1.2 | Precio del producto en tarjeta |
| **Body (Párrafos)**| Plus Jakarta Sans | 400 | `1.00rem` (16px) | `0.95rem` (15px) | 1.5 | Descripción de bienvenida y textos |
| **Botones / Filtros**| Plus Jakarta Sans| 600 | `0.90rem` (14.5px)| `0.85rem` (13.5px)| 1.0 | Etiquetas de botones y filtros |
| **Badges / Tags** | Plus Jakarta Sans | 600 | `0.75rem` (12px) | `0.75rem` (12px) | 1.0 | Categoría en tarjeta de producto |
| **Footer / Meta** | Plus Jakarta Sans | 400 | `0.85rem` (13.5px)| `0.80rem` (13px) | 1.4 | Derechos y leyendas del pie de página |

---

## 4. Estructura y Distribución de la Página (Layout Wireframe)

La interfaz se estructura en un flujo vertical limpio y centrado, guiando al usuario desde la bienvenida emocional hasta la exploración y filtrado del catálogo.

```
+-----------------------------------------------------------------------+
|  [Header]                                                             |
|  (Logo: Rewind Memories ♫)                   (Nav: Inicio | Catálogo) |
+-----------------------------------------------------------------------+
|                                                                       |
|  [Sección Hero / Bienvenida]                                          |
|  Título: "Tus recuerdos favoritos en una pista inolvidable"          |
|  Subtítulo: Descripción cálida de regalos musicales personalizados   |
|                                                                       |
+-----------------------------------------------------------------------+
|                                                                       |
|  [Barra de Filtros y Búsqueda de Precio]                             |
|  [Todos] [Cassettes] [Vinilos] [Llaveros] [Cuadros]                   |
|  [ Filtrar por precio máx: $ [______] ]                               |
|                                                                       |
+-----------------------------------------------------------------------+
|                                                                       |
|  [Galería de Productos - Grid de Tarjetas]                            |
|  +-------------------+  +-------------------+  +-------------------+  |
|  | [Imagen Producto] |  | [Imagen Producto] |  | [Imagen Producto] |  |
|  | (Badge Categoría) |  | (Badge Categoría) |  | (Badge Categoría) |  |
|  | Nombre Producto   |  | Nombre Producto   |  | Nombre Producto   |  |
|  | $XX.XX            |  | $XX.XX            |  | $XX.XX            |  |
|  +-------------------+  +-------------------+  +-------------------+  |
|                                                                       |
|  -- O Mensaje de Estado Vacío si no hay resultados --                 |
|                                                                       |
+-----------------------------------------------------------------------+
|  [Footer]                                                             |
|  Rewind Memories © 2026 - Melodías que perduran.                      |
+-----------------------------------------------------------------------+
```

---

## 5. Especificaciones Detalladas de Componentes

### 5.1 Encabezado y Navegación (Header)
- **Disposición:** Barra fija superior o con scroll suave, con efecto *frosted glass* sutil (`background: rgba(250, 248, 245, 0.92); backdrop-filter: blur(8px)`).
- **Logotipo:**
  - Texto "Rewind Memories" en fuente `Syne` 800, color `#744577`.
  - Icono conceptual musical (ej. cinta de cassette o nota retro estilizada) coloreado en `#84C5B1`.
- **Navegación:**
  - Enlaces sencillos ("Inicio", "Galería", "Acerca de").
  - Tipografía `Plus Jakarta Sans`, 500, color `#2C1A2E`.
  - En hover: subrayado dinámico o cambio a `#744577` con transición de 200ms.

### 5.2 Sección Hero / Bienvenida
- **Fondo:** Suave degradado lineal cálido entre `#FAF8F5` y `#F0E9B6` con 30% de opacidad.
- **Contenido:**
  - Badge superior: *"Colección Nostalgia & Audio"* con fondo `#F0E9B6`, texto `#744577`, esquinas completamente redondeadas (`pill`, `border-radius: 9999px`).
  - Titular principal (H1): *"Tus momentos más felices grabados en música"*.
  - Párrafo descriptivo: *"Personaliza cassettes, vinilos y detalles melódicos creados a la medida para revivir tus canciones favoritas con las personas que amas."* (Máximo 65 caracteres por línea para lectura descansada).
- **Decoración:** Formas redondeadas suaves en los bordes que recuerdan bobinas de cinta de cassette.

### 5.3 Barra de Filtros y Controles
La barra reúne el selector de categorías y el filtro de precio máximo en una sola área de control visualmente armónica.

#### A. Botones de Filtro por Categoría
- **Forma:** Tipo pastilla (*pill shape*, `border-radius: 9999px`).
- **Estado Inactivo:**
  - Fondo: `#FFFFFF`.
  - Borde: `1.5px solid #84C5B1`.
  - Texto: `#744577`, peso 600.
  - Padding: `0.55rem 1.25rem`.
- **Estado Hover:**
  - Fondo: `#84C5B1`.
  - Texto: `#FFFFFF`.
  - Transformación: `transform: translateY(-2px)`.
- **Estado Activo / Seleccionado:**
  - Fondo: `#744577`.
  - Borde: `1.5px solid #744577`.
  - Texto: `#F0E9B6`.
  - Sombra sutil: `0 4px 10px rgba(116, 69, 119, 0.25)`.

#### B. Campo de Entrada para Precio Máximo
- **Estructura:** Etiqueta clara + contenedor de entrada con símbolo de moneda integrado.
- **Etiqueta:** *"Precio máximo:"* en tipografía `Plus Jakarta Sans` 600, color `#2C1A2E`.
- **Campo numérico (`<input type="number">`):**
  - Fondo: `#FFFFFF`.
  - Borde: `1.5px solid #84C5B1`.
  - Border-radius: `12px`.
  - Padding: `0.55rem 1rem`.
  - Placeholder: *"Ej. 35"* en color `#655468`.
  - Estado Focus: Borde cambia a `#744577`, sombra perimetral suave `0 0 0 3px rgba(132, 197, 177, 0.45)`, sin borde negro por defecto (`outline: none`).

### 5.4 Tarjetas de Producto (Product Cards)
- **Dimensiones y Contenedor:**
  - Fondo: `#FFFFFF`.
  - Borde: `1.5px solid #E8E2D8`.
  - Border-radius: `18px`.
  - Padding interior: `1rem`.
  - Transición fluida: `all 0.25s cubic-bezier(0.16, 1, 0.3, 1)`.
- **Zona de Imagen / Representación:**
  - Aspect ratio: `1:1` (cuadrado simétrico) o `4:3`.
  - Border-radius interno: `12px`.
  - Fondo temporal/placeholder: Tono pastel suave `#F0E9B6` con detalle retro.
  - Efecto hover en imagen: Ligero zoom interior (`transform: scale(1.03)`).
- **Etiqueta de Categoría (Badge):**
  - Ubicación: Flotante en la esquina superior izquierda de la imagen o justo debajo de ella.
  - Fondo: `#ACCFA3`.
  - Texto: `#2C1A2E`, `0.75rem`, mayúsculas sostenidas con `letter-spacing: 0.05em`, peso 600.
  - Border-radius: `9999px`.
  - Padding: `0.25rem 0.65rem`.
- **Nombre del Producto:**
  - Tipografía: `Plus Jakarta Sans` 600, color `#2C1A2E`, tamaño `1.15rem`.
  - Margen superior: `0.65rem`.
- **Precio del Producto:**
  - Tipografía: `Plus Jakarta Sans` 700, color `#744577`, tamaño `1.35rem`.
  - Alineación y jerarquía: Destacado visualmente en la parte inferior de la tarjeta.
- **Efecto Hover en la Tarjeta Completa:**
  - Elevación: `transform: translateY(-6px)`.
  - Sombra envolvente: `box-shadow: 0 12px 24px -6px rgba(116, 69, 119, 0.15)`.
  - Borde resaltado: Borde transiciona a `#84C5B1`.

### 5.5 Mensaje Visual de Estado Vacío (Empty State)
Se activa dinámicamente cuando el filtro de categoría o el precio máximo no arroja coincidencias:
- **Contenedor:**
  - Centrado en la sección de la galería, con padding generoso (`3rem 1.5rem`).
  - Fondo: `#FAF8F5` con borde punteado suave `2px dashed #84C5B1`.
  - Border-radius: `24px`.
  - Ancho máximo: `520px` centrado con `margin: 0 auto`.
- **Elemento Gráfico:**
  - Icono representativo (cinta de cassette desenrollada o disco con signo de interrogación) dentro de un círculo con fondo `#F0E9B6` de `72px x 72px`.
- **Mensaje:**
  - Título (H3): *"No encontramos melodías que coincidan"* en color `#744577`.
  - Texto explicativo: *"Intenta aumentar el precio máximo o elegir otra categoría para descubrir más recuerdos."* en color `#655468`.
- **Elemento de Acción:**
  - Botón secundario *"Restablecer filtros"* con fondo `#84C5B1`, texto `#FFFFFF` y esquinas redondeadas.

### 5.6 Pie de Página (Footer)
- **Fondo:** `#FAF8F5` con un borde superior suave `1.5px solid #F0E9B6`.
- **Estructura:**
  - Marca: "Rewind Memories" en `Syne` 700, tamaño moderado (`1.2rem`), color `#744577`.
  - Tagline nostálgico: *"Regalos personalizados que hacen sonar tus mejores momentos."*
  - Nota de derechos y año: `Plus Jakarta Sans` 400, color `#655468`, `0.85rem`.
- **Espaciado:** Padding vertical de `2.5rem 1rem`, centrado y minimalista.

---

## 6. Estados Interactivos y Microinteracciones

Para mantener una experiencia moderna y táctil sin frameworks:
1. **Transiciones Estándar:**
   - Todos los cambios de color, sombras y transformaciones deben usar: `transition: all 0.2s ease-in-out`.
2. **Estados de Foco (Accesibilidad Universal):**
   - Todos los elementos interactivos (`button`, `input`, `a`) deben implementar `:focus-visible` con un anillo nítido: `outline: 2px solid #84C5B1; outline-offset: 3px;`.
3. **Estado Presionado (`:active`):**
   - Los botones se contraen sutilmente: `transform: scale(0.97);`.
4. **Respeto a Preferencias del Usuario:**
   - Integrar `@media (prefers-reduced-motion: reduce)` para desactivar transiciones y transformaciones a usuarios sensibles al movimiento.

---

## 7. Especificaciones de Diseño Adaptable (Responsive Layout)

El layout se diseña con un enfoque Mobile-First, escalando ordenadamente hacia pantallas mayores mediante CSS Grid y Flexbox nativo.

### 7.1 Puntos de Ruptura (Breakpoints)
| Dispositivo | Rango de Ancho | Configuración de Galería | Configuración de Filtros |
| :--- | :--- | :--- | :--- |
| **Móvil (Mobile)** | `< 640px` | 1 columna (`1fr`), ancho 100% | Filtros en carrusel scroll horizontal (`overflow-x: auto`), input de precio en fila dedicada |
| **Tableta (Tablet)**| `640px – 1023px` | 2 columnas (`repeat(2, 1fr)`) | Filtros y selector de precio alineados en dos filas compactas |
| **Escritorio (Desktop)** | `≥ 1024px` | 3 o 4 columnas (`repeat(auto-fill, minmax(280px, 1fr))`) | Barra horizontal unificada: botones a la izquierda, input de precio a la derecha |

### 7.2 Guía de Espaciado (Spacing Scale)
- `space-xs`: `0.25rem` (4px)
- `space-sm`: `0.50rem` (8px)
- `space-md`: `1.00rem` (16px)
- `space-lg`: `1.50rem` (24px)
- `space-xl`: `2.50rem` (40px)
- `space-2xl`: `4.00rem` (64px)
- Contenedor máximo de lectura/galería: `max-width: 1200px` centrado con márgenes laterales dinámicos (`padding: 0 1.5rem`).

---

## 8. Arquitectura de Implementación Sugerida (Vanilla HTML/CSS/JS)

Para cumplir con las restricciones del proyecto (sin frameworks ni librerías):

### 8.1 Variables CSS Nativas Recomendadas (`:root`)
```css
:root {
  /* Paleta Base Estricta */
  --color-primary-purple: #744577;
  --color-butter-yellow: #F0E9B6;
  --color-soft-green: #ACCFA3;
  --color-turquoise-green: #84C5B1;

  /* Neutros Funcionales */
  --color-bg-base: #FAF8F5;
  --color-surface-white: #FFFFFF;
  --color-text-main: #2C1A2E;
  --color-text-muted: #655468;
  --color-border-subtle: #E8E2D8;

  /* Tipografías */
  --font-display: 'Syne', sans-serif;
  --font-body: 'Plus Jakarta Sans', sans-serif;

  /* Radios */
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 18px;
  --radius-full: 9999px;

  /* Sombras */
  --shadow-card: 0 4px 12px rgba(116, 69, 119, 0.06);
  --shadow-hover: 0 12px 24px -4px rgba(116, 69, 119, 0.16);
  --transition-fast: 0.2s ease-in-out;
}
```

### 8.2 Checklist de Cumplimiento de Restricciones
- [x] **Identidad Retro Creativa:** Balance de curvas vintage, color mantequilla nostálgico y tipografía `Syne` de impacto musical.
- [x] **Paleta Estricta Respetada:** `#744577`, `#F0E9B6`, `#ACCFA3`, `#84C5B1` con neutros exclusivamente para legibilidad.
- [x] **Estructura Solicitada Completa:** Header con navegación, Hero de bienvenida, Galería en tarjetas (nombre, precio, categoría), botones de filtro, input numérico de precio máximo, empty state y footer.
- [x] **Componentes Visuales Definidos:** Botones primarios/secundarios, tarjetas, badges, input numérico, estados hover/focus, empty state.
- [x] **Totalmente adaptable:** Especificaciones móviles, tabletas y escritorio.
- [x] **Vanilla Friendly:** Cero frameworks CSS; 100% implementable con CSS Grid, Flexbox y JavaScript nativo.
- [x] **Cero Excesos:** Sin diseño de CRUD, sin autenticación, sin bases de datos ni código de implementación prematuro.
