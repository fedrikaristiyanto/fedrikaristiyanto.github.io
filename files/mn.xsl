<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
  <html>
  <body>
  <h2>name</h2>
  <table border="1">
    <tr bgcolor="blue">
      <th>first name</th>
      <th>last name</th>
      <th>full name</th>
    </tr>
    <xsl:for-each select="contact/info">
    <tr>
      <td><xsl:value-of select="first name"/></td>
      <td><xsl:value-of select="last name"/></td>
      <td><xsl:value-of select="full name"/></td>
    </tr>
    </xsl:for-each>
  </table>
  </body>
  </html>
</xsl:template>

</xsl:stylesheet>
