export const simple_form = {
  title: "Formulario de prueba",
  items: [
    [
      {
        label: "Email",
        placeholder: "Inserte un email",
        type: "text",
        field: 'email',
        validation: {
          requiered: true,
          requieredMsg: 'Parametro requerido',
          pattern: "^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$",
          patternMsg: 'Formato no valido',
        },
      },
      {
        label: "Nombre",
        placeholder: "Inserte Nombre",
        type: "text",
        field: "name",
        validation: {
          requiered: true,
          requieredMsg: 'Parametro requerido',
          custom : value => (value.split(' ').length > 2),
          customMsg: 'Introduaca apellidos'
        },
      },
    ],
    [
      {
        label: "year",
        type: "number",
        field: 'year',
        validation: {
          requiered: true,
          requieredMsg: 'Parametro requerido',
          custom : value => (value >= 5 && value <= 10),
          customMsg: 'Valor fuera de rango'
        },
      },
    ],
    [
      {
        label: "Fecha",
        type: "date",
        field: 'date',
        validation: {
          requiered: true
        },
      },
    ],
    [
      {
        label: "Rango de fechas",
        type: "date-range",
        field: 'date',
        validation: {
          requiered: true
        },
      },
    ],
    // [
    //   {
    //     label: "Edad",
    //     placeholder: "Inserte una edad",
    //     type: "number",
    //     field: 'age',
    //     validation: {
    //       requiered: true,
    //       pattern: "^([1][8-9]|[2-5][0-9]|[6][0-5])$",
    //     },
    //   },
    // ],
    // [
    //   {
    //     label: "Direccion",
    //     placeholder: "Inserte direccion",
    //     type: "text",
    //     field: 'address',
    //   },
    //   {
    //     label: "Codigo postal",
    //     placeholder: "Codigo postal",
    //     type: "text",
    //     field:'postal_code'
    //   },
    // ],
  ],
  actions: {
    reset: "Limpiar",
    submit: "Enviar",
  },
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
