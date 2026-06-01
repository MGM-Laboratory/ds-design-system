'use client';

import { Container, Section, Stack, Grid, HStack } from '@labmgm/layout';
import {
  Button,
  IconButton,
  Badge,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Avatar,
  AvatarGroup,
  Alert,
  AlertTitle,
  AlertDescription,
  Progress,
  Skeleton,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from '@labmgm/react';
import { Heart, Sparkles, Settings } from '@labmgm/icons';
import { toast } from '@labmgm/toast';

export default function ComponentsPage() {
  return (
    <Section padding="lg">
      <Container>
        <Stack gap={10}>
          <Stack gap={2}>
            <span className="text-eyebrow uppercase text-ink-3">Catalog</span>
            <h1 className="text-display-lg">Components</h1>
            <p className="max-w-prose text-body-lg text-ink-2">
              Every primitive in @labmgm/react. Open the source file to see the implementation.
            </p>
          </Stack>

          <section>
            <h2 className="text-h2 mb-4">Buttons</h2>
            <HStack gap={3} wrap>
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="accent">Accent</Button>
              <Button variant="danger">Danger</Button>
              <Button variant="link">Link</Button>
              <Button loading>Loading</Button>
              <Button leadingIcon={<Sparkles size={16} />}>With icon</Button>
              <IconButton icon={<Heart size={16} />} label="Favorite" />
            </HStack>
          </section>

          <section>
            <h2 className="text-h2 mb-4">Badges</h2>
            <HStack gap={2} wrap>
              <Badge tone="neutral">Neutral</Badge>
              <Badge tone="info">Info</Badge>
              <Badge tone="success">Success</Badge>
              <Badge tone="warning">Warning</Badge>
              <Badge tone="danger">Danger</Badge>
              <Badge tone="solid">Solid</Badge>
              <Badge tone="solid-blue">Blue</Badge>
              <Badge tone="solid-green">Green</Badge>
              <Badge tone="solid-red">Red</Badge>
              <Badge tone="solid-yellow">Yellow</Badge>
            </HStack>
          </section>

          <section>
            <h2 className="text-h2 mb-4">Cards</h2>
            <Grid cols={1} responsive={{ base: 1, md: 3 }} gap={4}>
              <Card>
                <CardHeader>
                  <CardTitle>Outlined</CardTitle>
                  <CardDescription>The default product card.</CardDescription>
                </CardHeader>
                <CardContent>Body content goes here.</CardContent>
                <CardFooter>
                  <Button size="sm" variant="ghost">
                    Action
                  </Button>
                </CardFooter>
              </Card>
              <Card variant="tint-blue">
                <CardHeader>
                  <CardTitle>Tinted blue</CardTitle>
                  <CardDescription>Soft brand background.</CardDescription>
                </CardHeader>
              </Card>
              <Card variant="inverse">
                <CardHeader>
                  <CardTitle className="text-white">Inverse</CardTitle>
                  <CardDescription className="text-white/70">High-contrast surface.</CardDescription>
                </CardHeader>
              </Card>
            </Grid>
          </section>

          <section>
            <h2 className="text-h2 mb-4">Avatars</h2>
            <HStack gap={3} align="center">
              <Avatar name="Jane Doe" />
              <Avatar name="Bob Smith" size="lg" />
              <AvatarGroup max={3}>
                <Avatar name="Jane Doe" />
                <Avatar name="Bob Smith" />
                <Avatar name="Carol Jones" />
                <Avatar name="Dave Patel" />
                <Avatar name="Eve Lee" />
              </AvatarGroup>
            </HStack>
          </section>

          <section>
            <h2 className="text-h2 mb-4">Alerts</h2>
            <Stack gap={3}>
              <Alert tone="info">
                <AlertTitle>Heads up</AlertTitle>
                <AlertDescription>This is an informational alert.</AlertDescription>
              </Alert>
              <Alert tone="success">
                <AlertTitle>Published</AlertTitle>
                <AlertDescription>Your asset is live.</AlertDescription>
              </Alert>
              <Alert tone="warning">
                <AlertTitle>Heads up</AlertTitle>
                <AlertDescription>You're nearing your quota.</AlertDescription>
              </Alert>
              <Alert tone="danger">
                <AlertTitle>Couldn't save</AlertTitle>
                <AlertDescription>Network unreachable. Try again.</AlertDescription>
              </Alert>
            </Stack>
          </section>

          <section>
            <h2 className="text-h2 mb-4">Progress + Skeletons</h2>
            <Stack gap={3}>
              <Progress value={42} />
              <Progress value={72} tone="brand-green" size={8} />
              <Stack gap={2}>
                <Skeleton variant="text" />
                <Skeleton variant="text" className="w-3/4" />
                <Skeleton variant="text" className="w-1/2" />
              </Stack>
            </Stack>
          </section>

          <section>
            <h2 className="text-h2 mb-4">Tabs</h2>
            <Tabs defaultValue="overview">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="files">Files</TabsTrigger>
                <TabsTrigger value="settings">
                  <Settings size={14} /> Settings
                </TabsTrigger>
              </TabsList>
              <TabsContent value="overview">Overview content</TabsContent>
              <TabsContent value="files">Files content</TabsContent>
              <TabsContent value="settings">Settings content</TabsContent>
            </Tabs>
          </section>

          <section>
            <h2 className="text-h2 mb-4">Toast</h2>
            <HStack gap={2}>
              <Button onClick={() => toast.success('Asset published')}>Success</Button>
              <Button variant="danger" onClick={() => toast.error('Upload failed')}>
                Error
              </Button>
              <Button variant="secondary" onClick={() => toast('Saved')}>
                Default
              </Button>
            </HStack>
          </section>
        </Stack>
      </Container>
    </Section>
  );
}
