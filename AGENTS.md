# Guía de Desarrollo y Reglas para Agentes — Rewind Memories
**Directrices oficiales de desarrollo, arquitectura y buenas prácticas**  
*Proyecto: Galería interactiva de productos personalizados de música y recuerdos*

---

## 1. Tecnologías Permitidas

- **Vite:** Herramienta de compilación y servidor de desarrollo rápido.
- **HTML5:** Semántica web moderna y accesible.
- **CSS3:** Estilos nativos utilizando CSS Grid, Flexbox y Custom Properties (`:root`), sin frameworks.
- **JavaScript Vanilla (ES Modules):** Sintaxis moderna con `import` y `export` nativos.

### Prohibiciones Tecnológicas
- **NO** utilizar React, Vue, Angular, Svelte ni ningún otro framework o librería UI.
- **NO** instalar dependencias adicionales en `package.json` a menos que sea estrictamente solicitado y aprobado.
- **NO** utilizar frameworks o preprocesadores de CSS (Bootstrap, Tailwind CSS, Sass, etc.).

---

## 2. Estructura del Proyecto

El proyecto sigue una arquitectura modular en JavaScript vanilla sobre la estructura existente de Vite:

```text
galeria-productos-jl/
├── index.html              # Punto de entrada HTML con semántica estructurada
├── package.json            # Configuración de Vite y scripts de ejecución
├── AGENTS.md               # Reglas y directrices de desarrollo para agentes (este archivo)
├── DESIGN.md               # Especificación completa de diseño UI/UX y tokens visuales
└── src/
    ├── main.js             # Punto de entrada JS: inicialización, eventos y orquestación
    ├── style.css           # Estilos globales, variables CSS y diseño responsive
    ├── data/
    │   └── products.js     # Colección estática de productos (array de objetos)
    └── views/
        └── gallery.js      # Funciones puras de renderizado y generación de plantillas HTML
```

> **Nota de integridad:** Respetar la estructura base ya inicializada por Vite en el proyecto. No duplicar configuraciones ni mover archivos innecesariamente.

---

## 3. Convenciones de Programación

### 3.1 Nomenclatura e Idioma
- **Código en inglés:** Nombres de variables, constantes, funciones, clases, IDs, nombres de archivos de código y comentarios técnicos deben escribirse en **inglés** (ej. `filteredProducts`, `renderGallery`, `handleCategoryFilter`).
- **Interfaz en español:** Todo el texto visible al usuario final (títulos, descripciones, botones, etiquetas, alertas y mensajes de error o estado vacío) debe estar en **español**, tal como se define en `DESIGN.md`.

### 3.2 Calidad y Paradigmas de JavaScript
- **Funciones pequeñas y puras:** Cada función debe cumplir un propósito único, claro y comprobable (Principio de Responsabilidad Única).
- **Mutabilidad controlada:** Utilizar `const` por defecto para variables, arrays y objetos. Usar `let` únicamente cuando la reasignación sea indispensable. Prohibido el uso de `var`.
- **Generación de HTML:** Emplear exclusivamente *Template Literals* (strings con comillas invertidas `` `...` ``) para construir fragmentos de interfaz dinámicos de forma limpia y legible.
- **Transformación de datos:**
  - Emplear obligatoriamente `map()` para transformar los datos de productos en tarjetas HTML.
  - Emplear obligatoriamente `filter()` para aplicar los criterios de categoría y precio máximo.
- **Manipulación del DOM:**
  - Las actualizaciones visuales deben realizarse en el DOM sin provocar recargas de página (`event.preventDefault()` cuando aplique).
  - Mantener separación estricta entre la lógica de filtrado de datos y el renderizado visual.

---

## 4. Alcance Funcional Estricto

La aplicación se limita estrictamente a las siguientes capacidades:

1. **Catálogo interactivo:** Renderizar una galería visual de productos musicales personalizados.
2. **Información visible por producto:** Cada tarjeta debe mostrar obligatoriamente:
   - Nombre del producto.
   - Precio formateado en moneda local/dólares (`$XX.XX`).
   - Categoría a la que pertenece (badge).
   - Imagen o representación visual temática.
3. **Filtro por categoría:** Botones interactivos que permiten filtrar productos por su categoría correspondiente.
4. **Filtro por precio máximo:** Campo numérico interactivo que limita los productos mostrados a aquellos con un precio menor o igual al valor ingresado.
5. **Reinicio de filtros:** Permitir volver a ver todos los productos sin restricciones (botón "Todos" o botón de restablecimiento).
6. **Estado vacío (*Empty State*):** Mostrar un contenedor visual y amigable cuando ningún producto cumpla los filtros activos de categoría y precio.

---

## 5. Restricciones Críticas y Prohibiciones

- **NO** implementar operaciones CRUD (crear, editar o eliminar productos en tiempo de ejecución).
- **NO** agregar formularios de creación, edición o subida de productos.
- **NO** utilizar `localStorage`, `sessionStorage`, `IndexedDB` ni ninguna base de datos o almacenamiento persistente.
- **NO** implementar sistemas de autenticación, login, registro de usuarios ni manejo de sesiones.
- **NO** agregar librerías externas innecesarias ni utilidades pesadas.
- **NO** modificar archivos que no hayan sido expresamente solicitados en la instrucción de la etapa en curso.
- **NO** sustituir funcionalidades preexistentes sin autorización explícita.
- **NO** adelantar etapas ni escribir código antes de que sea requerido por el usuario.

---

## 6. Directrices de Diseño e Identidad Visual

El aspecto visual debe regirse al 100% por lo establecido en `DESIGN.md`.

### Paleta de Color Obligatoria
- **Morado Principal:** `#744577` (RGB: 116, 69, 119) — Botones primarios, títulos y precios.
- **Amarillo Mantequilla:** `#F0E9B6` (RGB: 240, 233, 182) — Fondos cálidos y acentos retro.
- **Verde Suave:** `#ACCFA3` (RGB: 172, 207, 163) — Etiquetas de categoría y confirmaciones.
- **Verde Turquesa:** `#84C5B1` (RGB: 132, 197, 177) — Botones secundarios, hover y focos accesibles.

> **Regla de oro:** No cambiar, alterar ni sustituir estos colores por iniciativa propia. Utilizar colores neutros (`#FFFFFF`, `#FAF8F5`, `#2C1A2E`, `#655468`) únicamente con el propósito de garantizar legibilidad y contraste WCAG AA.

---

## 7. Metodología de Trabajo por Etapas

El desarrollo se ejecutará mediante instrucciones incrementales paso a paso:

1. **Recepción:** Leer detenidamente las instrucciones específicas de la etapa actual.
2. **Foco:** Modificar **únicamente** los archivos indicados para dicha etapa.
3. **Respeto al entorno:** Preservar la estructura establecida, el código existente y las configuraciones de Vite.
4. **Cero excesos:** No implementar características que no formen parte de la instrucción activa.
5. **Reporte final:** Al completar cada etapa, presentar un resumen conciso indicando:
   - Archivos creados o modificados.
   - Objetivos funcionales y técnicos conseguidos.
6. **Resolución de dudas:** Ante la ausencia de un archivo o ante cualquier conflicto con estas reglas, solicitar aclaración antes de proceder a realizar cambios.
