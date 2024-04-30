let handler = async (m, { conn, args, usedPrefix, command }) => {
    conn.relayMessage(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: 'اهلا بك في قائمه بوت السلطان⚙️'
            },
            body: {
              text: 'قم بختيار الامر من القائمه'
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: 'single_select',
                  buttonParamsJson: JSON.stringify({
                    title: 'القائمه',
                    sections: [
                      {
                        title: 'القائمة',
                        highlight_label: 'بوت السلطان',
                        rows: [
                          {
                            header: 'منشن',
                            title: 'منشن',
                            description: '',
                            id: 'منشن.'
                          },
                                        {
                            header: 'الدعم',
                            title: 'الدعم',
                            description: '',
                            id: '.الدعم'
                          },
                          {
                            header: 'المطور',
                            title: 'المطور',
                            description: '',
                            id: '.مطور'
                          }
                        ]
                      }
                    ]
                  }),
                  messageParamsJson: ''
                }
              ]
            }
          }
        }
      }
    }, {})

}

handler.help = ['info']
handler.tags = ['main']
handler.command = ['الازرار']

export default handler
