<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
  <html>
  <body>
  <h2>drink menu</h2>
  <table border="1">
    <tr bgcolor="#9acd32">
      <th>first name</th>
      <th>last name</th>
      <th>full name</th>
    </tr>
    <xsl:for-each select="menu/drink">
    <tr>
      <td><xsl:value-of select="first_name"/></td>
      <td><xsl:value-of select="last_name"/></td>
      <td><xsl:value-of select="last_name"/></td>
    </tr>
    </xsl:for-each>
  </table>
  </body>
  </html>
</xsl:template>

</xsl:stylesheet>
