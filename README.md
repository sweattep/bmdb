# bmdb
## Format
```
timeline_quotes:
  - time: "00:03"
    quote: "Know thyself. – Inscription at the Temple of Apollo at Delphi"
    speaker: "Milton Howery Jr."

  - time: "00:15"
    quote: "It is not that we have a short time to live, but that we waste much of it. – Seneca"
    speaker: "Milton Howery Jr."

  - time: "00:28"
    quote: "He who is brave is free. – Seneca"
    speaker: "Kyrie Andrew Irving"

  - time: "00:52"
    quote: "Old age and treachery will always overcome youth and skill. – Ancient proverb"
    speaker: "Shaquille Rashaun O'Neal"

  - time: "01:15"
    quote: "The greatest wealth is to live content with little. – Plato"
    speaker: "Milton Howery Jr."

  - time: "01:35"
    quote: "The flame that burns twice as bright burns half as long. – Laozi"
    speaker: "Kyrie Andrew Irving"
```

### Atom
```
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>Ancient Quote Timeline</title>
  <link href="http://example.com/2025-06-17-quotes-feed"/>
  <updated>2025-06-17T00:100:00Z</updated>
  <id>urn:uuid:2025-06-17-quotes-feed</id>

  <entry>
    <title>00:03 – Milton Howery Jr.</title>
    <id>urn:uuid:quote-0003</id>
    <updated>2025-06-17T00:00:00Z</updated>
    <content>Know thyself. – Inscription at the Temple of Apollo at Delphi</content>
  </entry>

  <entry>
    <title>00:15 – Milton Howery Jr.</title>
    <id>urn:uuid:quote-0015</id>
    <updated>2025-06-17T00:00:00Z</updated>
    <content>It is not that we have a short time to live, but that we waste much of it. – Seneca</content>
  </entry>

  <entry>
    <title>00:28 – Kyrie Andrew Irving</title>
    <id>urn:uuid:quote-0028</id>
    <updated>2025-06-17T00:00:00Z</updated>
    <content>He who is brave is free. – Seneca</content>
  </entry>

  <entry>
    <title>00:52 – Shaquille Rashaun O'Neal</title>
    <id>urn:uuid:quote-0052</id>
    <updated>2025-06-17T00:00:00Z</updated>
    <content>Old age and treachery will always overcome youth and skill. – Ancient proverb</content>
  </entry>

  <entry>
    <title>01:15 – Milton Howery Jr.</title>
    <id>urn:uuid:quote-0115</id>
    <updated>2025-06-17T00:00:00Z</updated>
    <content>The greatest wealth is to live content with little. – Plato</content>
  </entry>

  <entry>
    <title>01:35 – Kyrie Andrew Irving</title>
    <id>urn:uuid:quote-0135</id>
    <updated>2025-06-17T00:00:00Z</updated>
    <content>The flame that burns twice as bright burns half as long. – Laozi</content>
  </entry>

</feed>
```

### OPML
```
<opml version="2.0">
  <head>
    <title>Ancient Quote Timeline</title>
  </head>
  <body>
    <outline text="Quotes">
      <outline text="00:03 – Milton Howery Jr.">
        <outline text="Know thyself. – Inscription at the Temple of Apollo at Delphi" />
      </outline>
      <outline text="00:15 – Milton Howery Jr.">
        <outline text="It is not that we have a short time to live, but that we waste much of it. – Seneca" />
      </outline>
      <outline text="00:28 – Kyrie Andrew Irving">
        <outline text="He who is brave is free. – Seneca" />
      </outline>
      <outline text="00:52 – Shaquille Rashaun O'Neal">
        <outline text="Old age and treachery will always overcome youth and skill. – Ancient proverb" />
      </outline>
      <outline text="01:15 – Milton Howery Jr.">
        <outline text="The greatest wealth is to live content with little. – Plato" />
      </outline>
      <outline text="01:35 – Kyrie Andrew Irving">
        <outline text="The flame that burns twice as bright burns half as long. – Laozi" />
      </outline>
    </outline>
  </body>
</opml>
```  
