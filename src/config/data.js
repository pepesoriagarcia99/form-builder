export const simple_form = {
  title: "",
  items: [
    {
      label: 'Email',
      placeholder: 'Inserte un email',
      type: 'text',
      validation: {
        requiered: true,
        pattern: '^(.+)@(\\S+)$' // expresion regular
      }
    },
    {
      label: 'Edad',
      placeholder: 'Inserte una edad',
      type: 'number',
      validation: {
        requiered: true,
        pattern: '^([1][8-9]|[2-5][0-9]|[6][0-5])$'
      }
    }
  ]
};

// inputs relacionados, en la misma fila relacion entre diferentes inputs
export const related_inputs = {
  title: "",
};

// filas relacionadas, nuevas filas a partir de parametros
export const related_row = {
  title: "",
};

// /** Inputs */
// inputs: {
//   type: Array,
//   default: () => [
//     {
//       label: 'Email',
//       placeholder: 'Inserte un email',
//       type: 'text',
//       validation: {
//         requiered: true,
//         pattern: '^(.+)@(\\S+)$' // expresion regular
//       }
//     },
//     {
//       label: 'Edad',
//       placeholder: 'Inserte una edad',
//       type: 'number',
//       validation: {
//         requiered: true,
//         pattern: '^([1][8-9]|[2-5][0-9]|[6][0-5])$'
//       }
//     },
//     {
//       label: 'Sexualidad',
//       type: 'radio',
//       items: [
//         {
//           // el primero ira preseleccionado
//           label: 'Vacio',
//           value: 'vacio'
//         },
//         {
//           label: 'Hombre',
//           value: 'hombre'
//         },
//         {
//           label: 'Mujer',
//           value: 'Mujer'
//         }
//       ]
//     },
//     {
//       // pensar en rango
//       label: 'Rango de fechas',
//       placeholder: '',
//       type: 'date',
//       // subType: 'range',
//       validation: {
//         requiered: true
//       }
//     },
//     {
//       label: 'Servicios necesarios',
//       type: 'checkboxGroup',
//       items: []
//     },
//     {
//       label: 'Selecciones tarifa',
//       type: 'select',
//       items: []
//     },
//     {
//       label: 'Selecciones punto',
//       type: 'component',
//       component: 'MapDrawTool'
//     }
//   ]
// },
// /** Configuration */
// configuration: {
//   type: Object,
//   default: () => ({
//     title: 'Formulario de registro',
//     submit: false,
//     submitLabel: 'Enviar',
//     clean: false,
//     cleanLabel: 'Limpiar'
//   })
// }
