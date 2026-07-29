# Tutorial técnico RIA — v2.0

Guía del flujo operacional y funcional del sistema de evaluación del **Riesgo de Impacto Ambiental (RIA)** del Ministerio de Medio Ambiente y Recursos Naturales (MARN) de El Salvador.

**Sitio publicado:** https://erick-data.github.io/tutorial-ria/

## Contenido

| Sección | Tema |
|---|---|
| `index.html` | Portada y novedades de la v2.0 |
| `01-vision-general.html` | Visión general del sistema |
| `02-ina.html` | INA — Naturaleza y envergadura de la actividad |
| `03-isa.html` | ISA — Significancia ambiental del territorio |
| `04-pia.html` | PIA — Potencial de impacto por aspecto |
| `05-orquestador.html` | Agente orquestador y herramientas |
| `06-motor-sea.html` | Motor de Reglas SEA (competencia institucional) |
| `07-ria-cierre.html` | Cálculo del RIA y cierre |
| `08-corpus-legal.html` | Corpus legal y RAG multi-ley |
| `09-prompts.html` | Transcripción de los prompts del sistema |
| `modelo_relacional_pia.html` | Modelo relacional del PIA |

## Notas técnicas

HTML estático autocontenido: sin dependencias externas, sin CDNs, sin proceso de build. Los estilos y el JS viven en `assets/`. El archivo `.nojekyll` evita el procesamiento por Jekyll en GitHub Pages.

Para verlo en local basta abrir `index.html` en el navegador, o servirlo con `python -m http.server`.
