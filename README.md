# Grupo 01
MODELO PREDICTIVO DE INTERVENCIÓN PARA LA DEPRESIÓN EN ESTUDIANTES DE GRADO SUPERIOR
## Integrantes:
- Caballero Cáceres, Pedro
- Castillo Benites, Mauricio
- Castillo Aranda. Jordan
- Velasquez Avalos, Marycielo
- Velasquez Vergara, Angel
- Ventura Florian Steffano

# OBJETIVO DEL PROYECTO 
-Desarrollar una herramienta predictiva basada en datos para detectar riesgo de depresión en estudiantes universitarios, facilitando intervenciones preventivas y optimizando estrategias institucionales de atención.

# METODOLOGÍA
- Aplicación de análisis estadístico sobre variables académicas, demográficas, financieras y de estilo de vida.

- Uso de algoritmos supervisados (J48, KNN, Naive Bayes, Random Forest) para clasificación y regresión.

- Validación cruzada y evaluación con métricas como precisión, recall, F1-score y curva ROC.

- Preprocesamiento de datos: limpieza, normalización y codificación de variables para modelos predictivos.

# ESTRUCTURA Y COMPONENTES DE LA APP
- app/: Página principal, vistas de datos, modelos y formularios de predicción.

- components/: UI modular, controles deslizantes, tablas descriptivas y visualizaciones.

- lib/: Utilidades de procesamiento y lógica.

- hooks/: Hooks personalizados para formularios e interacción.

- ui/: Componentes visuales integrados (Radix UI, Lucide Icons).​

- Estilo: Tailwind CSS para personalización responsiva y tematización.

- Visualizaciones: Recharts para gráficos interactivos.

- Formularios: React Hook Form con validaciones automáticas.

# DATASET
- Utiliza un conjunto de datos de Kaggle; incluye variables como género, edad, presión académica, hábitos alimenticios, duración de sueño, satisfacción de estudio/trabajo y antecedentes familiares, entre otros.

# TECNOLOGÍAS Y DEPENDENCIAS
  - Next.js v16
  - React v19
  - TypeScript (Strict Mode)
  - Radix UI (componentes accesibles)
  - Lucide Icons (iconografía)
  - Tailwind CSS
 - Recharts (gráficas interactivas)
  - React Hook Form
  - PNPM para gestión eficiente de dependencias
  - Vercel Analytics para monitoreo web.

# INSTALACIÓN
###  1 Clonamos el repositorio
  ```
  git clone https://github.com/Mary05Sis/Mental-Predict.git
  cd Mental-Predict
```

### 2. Ejecutamos entorno de desarrollo:
  ```
   pnpm install
```
### 3. Ejecutamos entorno de desarrollo:
    ```
   pnpm dev
```
# USO
     - Accede al dashboard web para explorar datos, visualizar estadísticas y realizar predicciones individualizadas de riesgo de depresión.

     - Usa el formulario para ingresar variables clave y obtener el resultado del modelo junto con recomendaciones personalizadas.

     - Visualiza métricas de rendimiento y compara resultados entre distintos modelos (J48, KNN, Naive Bayes, Random Forest)

