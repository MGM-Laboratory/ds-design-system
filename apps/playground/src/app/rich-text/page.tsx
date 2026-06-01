'use client';

import { useState } from 'react';
import { Container, Section, Stack, Grid } from '@labmgm/layout';
import { RichTextEditor, RichTextRenderer } from '@labmgm/rich-text';

export default function RichTextPage() {
  const [html, setHtml] = useState(
    '<h1>Hello, MGM Laboratory.</h1><p>Edit me — the renderer on the right updates live.</p><ul><li>Bold, italic, underline</li><li>Headings, lists, code</li></ul>',
  );
  return (
    <Section padding="lg">
      <Container>
        <Stack gap={6}>
          <h1 className="text-display-lg">Rich text</h1>
          <Grid cols={1} responsive={{ base: 1, lg: 2 }} gap={4}>
            <RichTextEditor defaultValue={html} onUpdate={setHtml} />
            <div className="rounded-md border border-line p-4">
              <RichTextRenderer html={html} />
            </div>
          </Grid>
        </Stack>
      </Container>
    </Section>
  );
}
