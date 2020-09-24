let seed = {
  shape: 'square',

  htmlContainer: [" <div class='shape-container'> ",
    "</div>"
  ],
  htmlShape: [
    "<div class='octagon' id='outer' style={css}>",
    "<div class='octagon' id='inner' style={innerCss}>",
  ],

  htmlBorder: [
    "<div className='border-helper' id='t'></div>",
    "<div className='border-helper' id='b'></div>",
    "<div className='border-helper' id='l'></div>",
    "<div className='border-helper' id='r'></div>",
  ],
  css: {
    height: '100px',
    width: '100px',
  },

  outerCssOutput: [{
      style: 'width',
      value: '42069px'
    },
    {
      style: 'height',
      value: '666px'
    },
    {
      style: 'overflow',
      value: 'hidden'
    },
    {
      style: 'shadow',
      value: ''
    }
  ],

  innerCssOutput: [{
      style: 'width',
      value: '42069px'
    },
    {
      style: 'height',
      value: '666px'
    },
    {
      style: 'background',
      value: 'gold'
    },
    {
      style: 'transform',
      value: 'rotate(45deg)'
    },
    {
      style: 'border',
      value: ''
    },
    {
      style: 'shadow',
      value: ''
    }
  ],
  top: [{
        style: 'top',
        value: '0'
      }, {
        style: 'right',
        value: '0'
      }, {
        style: 'left',
        value: '0'
      }

    ],
    
    bottom: [{
      style: 'bottom',
      value: '0'
    }, {
      style: 'right',
      value: '0'
    }, {
      style: 'left',
      value: '0'
    } 
  ],

    left: [{
      style: 'left',
      value: '0'
    }, {
      style: 'top',
      value: '0'
    }, {
      style: 'bottom',
      value: '0'
    }, ],

    right: [{
      style: 'right',
      value: '0'
    }, {
      style: 'top',
      value: '0'
    }, {
      style: 'bottom',
      value: '0'
    }, ],



};



export default seed;