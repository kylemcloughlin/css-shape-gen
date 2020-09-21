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
    "<div className='border-helper' id='t' style={topBottom}></div>",
    "<div className='border-helper' id='b' style={topBottom}></div>",
    "<div className='border-helper' id='l' style={rightLeft}></div>",
    "<div className='border-helper' id='r' style={rightLeft}></div>",
  ],
  css: {
    height: '100px',
    width: '100px',
  },

  cssOutput: [{
      style: 'background',
      value: 'gold'
    },
    {
      style: 'height',
      value: '11em'
    },
    {
      style: 'width',
      value: '11em'
    },
    {
      style: 'border',
      value: ''
    },
    {
      style: 'shadow',
      value: ''
    }
  ]

};



export default seed;