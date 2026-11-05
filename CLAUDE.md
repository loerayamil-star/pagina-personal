# Reglas del proyecto — página personal

Este archivo fija las reglas no negociables para trabajar en este repositorio. Se mantienen
vigentes durante todo el proyecto, no solo en la configuración inicial.

## 1. Proceso de planeación

No se escribe código sin un plan aprobado primero. Las preguntas sobre secciones, contenido,
estilo y hosting se hacen antes de implementar. El dueño del repositorio propone y aprueba el
plan; los ajustes de matices no deben convertirse en una reescritura del plan a otro enfoque.

## 2. Privacidad

Nunca incluir: teléfono, dirección, edad, ni el horario o nombre detallado de la escuela como
dato de contacto, ni el correo principal. El contacto solo se hace por GitHub, LinkedIn o un
correo alterno explícitamente proporcionado para este fin.

## 3. Honestidad

No inventar logros, títulos ni certificaciones (ej. no decir "experto", no mencionar
certificaciones no aprobadas como SC-900). Si un proyecto está incompleto o tiene limitaciones
reales, se dice explícitamente en lugar de describirlo como terminado.

## 4. Cero marcas de IA en el repositorio

- Ningún commit lleva líneas `Co-Authored-By` relacionadas con IA.
- Ningún texto de commit, comentario de código, meta tag o archivo incluye frases como
  "Generated with Claude Code", enlaces de sesión, ni ninguna mención de que el contenido fue
  generado por una IA.
- La decisión de declarar o no el uso de IA, y dónde hacerlo, la toma únicamente el dueño del
  repositorio (no se agrega esa mención por iniciativa propia en ningún lugar no acordado).

## 5. Idioma y commits

- Todo el contenido de la página va en español y en primera persona.
- Los commits siguen el formato `tipo(alcance): descripción`, en presente (ej. "agrega",
  "corrige"), un commit por intención.

## 6. Flujo de trabajo con git

Todo el trabajo se hace en una rama distinta de `main`, nunca directamente sobre `main`. Al
terminar, se sube la rama; abrir el pull request es responsabilidad del dueño del repositorio.

## 7. Técnica

- HTML y CSS estáticos, sin framework, salvo que haya una razón concreta y justificada para
  otra cosa.
- Sin trackers, sin analytics, sin dependencias externas innecesarias (sin CDN, sin fuentes de
  terceros salvo que se justifique).
- Los enlaces externos llevan `rel="noopener noreferrer"`.
- La página debe ser accesible (HTML semántico, contraste adecuado, estados de foco) y debe
  tener modo oscuro.
- Mobile-first: el diseño se piensa primero para pantalla de celular.

## 8. Content-Security-Policy

Se aplica una CSP coherente con el hosting elegido, documentando el porqué de cada directiva
(headers HTTP reales si el hosting lo permite; `<meta>` si no). Sin estilos ni scripts en línea
que obliguen a debilitar la CSP con `'unsafe-inline'`.
