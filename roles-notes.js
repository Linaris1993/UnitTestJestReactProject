[{"content":"import { render, screen } from '@testing-library/react';\n\nfunction RoleExample() {\n  return (\n    <div>\n      <a href=\"/\">Link</a>\n      <button>Button</button>\n      <footer>Contentinfo</footer>\n      <h1>Heading</h1>\n      <header>Banner</header>\n      <img alt=\"description\" />Img\n      <input type=\"checkbox\" /> Checkbox\n      <input type=\"number\" /> Spinbutton\n      <input type=\"radio\" /> Radio\n      <input type=\"text\" /> Textbox\n      <li>Listitem</li>\n      <ul>ListGroup</ul>\n    </div>\n  );\n}\n\n  render(<RoleExample />);","type":"code","id":"rzqlm"},{"content":"test('find elements by role', () => {\r\nrender(<RoleExample />);\r\n\r\nconst roles = [\r\n'link',\r\n'button',\r\n'contentinfo',\r\n'heading',\r\n'banner',\r\n'img',\r\n'checkbox',\r\n'spinbutton',\r\n'radio',\r\n'textbox',\r\n'listitem',\r\n'list'\r\n];\r\n\r\nfor (let role of roles) {\r\n  const el = screen.getByRole(role);\r\n\r\n  expect(el).toBeInTheDocument();\r\n}\r\n});","type":"code","id":"su8l4"},{"content":"function AccessibleName() {\n  return (\n    <div>\n      <button>Submit</button>\n      <button>Cancel</button>\n    </div>\n  );\n}\n\nrender(<AccessibleName />);","type":"code","id":"has66"},{"content":"test('select by accessible name', () => {\n  render(<AccessibleName />);\n\n  const submitButton = screen.getByRole('button', {\n    name: /submit/i\n  });\n\n  const cancelButton = screen.getByRole('button', {\n    name: /cancel/i\n  });\n\n  expect(submitButton).toBeInTheDocument();\n  expect(cancelButton).toBeInTheDocument();\n});","type":"code","id":"zxhiz"},{"content":"function MoreNames() {\n  return (\n    <div>\n      <label htmlFor=\"email\">Email</label>\n      <input id=\"email\" />\n\n      <label htmlFor=\"search\">Search</label>\n      <input id=\"search\" />\n    </div>\n  );\n}\n\nrender(<MoreNames />);","type":"code","id":"kc87c"},{"content":"test('shows an email and search input', () => {\n  render(<MoreNames />);\n\n  const emailInput = screen.getByRole('textbox', {\n    name: /email/i,\n  });\n\n  const searchInput = screen.getByRole('textbox', {\n    name: /search/i,\n  });\n\n  expect(emailInput).toBeInTheDocument();\n  expect(searchInput).toBeInTheDocument();\n});","type":"code","id":"3lt5d"},{"content":"function IconButtons() {\n  return (\n    <div>\n      <button aria-label=\"sign in\">\n        <svg />\n      </button>\n\n      <button aria-label=\"sign out\">\n        <svg />\n      </button>\n    </div>\n  );\n}\nrender(<IconButtons/>);","type":"code","id":"q9so4"},{"content":"test('find elements based on label', () => {\r\nrender(<IconButtons />);\r\n\r\nconst signInBtn = screen.getByRole('button',{\r\n  name: /sign in/i\r\n});\r\n\r\nconst signOutBtn = screen.getByRole('button',{\r\n  name: /sign out/i\r\n});\r\nexpect(signInBtn).toBeInTheDocument();\r\nexpect(signOutBtn).toBeInTheDocument();\r\n});","type":"code","id":"83opa"}]