var rootElementHead =
    React.createElement('ul', {},
        React.createElement('li', { class: "headerlist" },
            React.createElement('a', {
                href: '/'
            }, 'Home')
        ),
        React.createElement('li', { class: "headerlist" },
            React.createElement('a', {
                href: 'mailto:mikeliu2@illinois.edu'
            }, 'Email')
        ),
        React.createElement('li', { class: "headerlist" },
            React.createElement('a', {
                href: 'resume.pdf'
            }, 'Resume')
        ),
        React.createElement('li', { class: "headerlist" },
            React.createElement('a', {
                href: 'https://github.com/mikeliu8492'
            }, 'Github')
        ),
        React.createElement('li', { class: "headerlist" },
            React.createElement('a', {
                href: 'https://www.linkedin.com/in/mikeliu8492'
            }, 'LinkedIn')
        ),
        React.createElement('li', { class: "headerlist" },
            React.createElement('a', {
                href: '/#work'
            }, 'Work Experience')
        ),
        React.createElement('li', { class: "headerlist" },
            React.createElement('a', {
                href: '/projects'
            }, 'Projects')
        ),
        React.createElement('li', { class: "headerlist" },
            React.createElement('a', {
                href: '/musicalsurprise'
            }, 'A Very Nice (Musical?) Surprise')
        )
    )

var rootElementFoot = React.createElement('ul', {},
    React.createElement('li', {},
        React.createElement('a', {
            href: '#PageTitle'
        }, 'Back to Top')
    )
)


ReactDOM.render(rootElementHead, document.getElementById('introheader'))
ReactDOM.render(rootElementFoot, document.getElementById('myfooter'))