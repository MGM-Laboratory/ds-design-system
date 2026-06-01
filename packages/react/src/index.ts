/**
 * @labmgm/react — the MGM Laboratory React component library.
 *
 * Import what you need; tree-shaking removes the rest:
 *
 *   import { Button, Card, Dialog, Tabs } from '@labmgm/react';
 *
 * For non-Tailwind consumers, import the pre-compiled stylesheet once:
 *
 *   import '@labmgm/react/styles.css';
 */

// Layout primitives (re-exported from @labmgm/layout)
export * from '@labmgm/layout';

// Brand
export { Logo, Wordmark, ShapeSignature, FooterStrip } from '@labmgm/brand';

// Theme
export { ThemeProvider, Surface, useSurface } from '@labmgm/theme';

// Patterns
export {
  PatternGrid,
  PatternTile,
  PatternCorner,
  PatternBanner,
  PatternDado,
  PatternStrip,
  PatternPyramid,
  PatternTriangle,
} from '@labmgm/patterns';

// Buttons & actions
export { Button, buttonVariants, type ButtonProps } from './Button/Button.js';
export { IconButton, type IconButtonProps } from './Button/IconButton.js';
export { ButtonGroup, type ButtonGroupProps } from './Button/ButtonGroup.js';
export { ToggleButton, type ToggleButtonProps } from './Button/ToggleButton.js';
export { ToggleButtonGroup, type ToggleButtonGroupProps } from './Button/ToggleButtonGroup.js';
export { Link, type LinkProps } from './Link/Link.js';
export { Kbd, type KbdProps } from './Kbd/Kbd.js';
export { CopyButton, type CopyButtonProps } from './CopyButton/CopyButton.js';

// Display
export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  cardVariants,
  type CardProps,
} from './Card/Card.js';
export { Badge, badgeVariants, type BadgeProps } from './Badge/Badge.js';
export { Tag, type TagProps } from './Tag/Tag.js';
export { Chip, type ChipProps } from './Chip/Chip.js';
export { Avatar, AvatarGroup, type AvatarProps, type AvatarGroupProps } from './Avatar/Avatar.js';
export { Stat, type StatProps } from './Stat/Stat.js';
export { Empty, type EmptyProps } from './Empty/Empty.js';
export { Skeleton, type SkeletonProps } from './Skeleton/Skeleton.js';
export { Spinner, type SpinnerProps } from './Spinner/Spinner.js';
export { Code, type CodeProps } from './Code/Code.js';
export { CodeBlock, type CodeBlockProps } from './Code/CodeBlock.js';

// Overlays
export {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
  type TooltipProps,
} from './Tooltip/Tooltip.js';
export {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverAnchor,
  PopoverClose,
} from './Popover/Popover.js';
export {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from './HoverCard/HoverCard.js';
export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
  type DialogContentProps,
} from './Dialog/Dialog.js';
export {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from './Dialog/AlertDialog.js';
export {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
} from './Drawer/Drawer.js';
export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuShortcut,
} from './Menu/DropdownMenu.js';
export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuLabel,
} from './Menu/ContextMenu.js';

// Navigation
export { Tabs, TabsList, TabsTrigger, TabsContent } from './Tabs/Tabs.js';
export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from './Accordion/Accordion.js';
export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from './Breadcrumb/Breadcrumb.js';
export { Pagination, type PaginationProps } from './Pagination/Pagination.js';
export { Stepper, Step, type StepperProps, type StepProps } from './Stepper/Stepper.js';
export { Navbar, NavbarBrand, NavbarSection, NavbarItem } from './Navbar/Navbar.js';
export { BackButton, type BackButtonProps } from './BackButton/BackButton.js';

// Feedback
export { Alert, AlertTitle, AlertDescription, alertVariants, type AlertProps } from './Alert/Alert.js';
export { Banner, type BannerProps } from './Banner/Banner.js';
export { Progress, type ProgressProps } from './Progress/Progress.js';
export { ProgressCircle, type ProgressCircleProps } from './Progress/ProgressCircle.js';
export { Callout, type CalloutProps } from './Callout/Callout.js';

// Data display
export { List, ListItem, type ListProps } from './List/List.js';
export {
  DescriptionList,
  DescriptionTerm,
  DescriptionDetails,
} from './List/DescriptionList.js';
export { Timeline, TimelineItem, type TimelineProps } from './Timeline/Timeline.js';
export { Separator } from './Separator/Separator.js';

// Media
export { Image, type ImageProps } from './Image/Image.js';
export { Carousel, type CarouselProps } from './Carousel/Carousel.js';

// Misc
export { ScrollArea, type ScrollAreaProps } from './ScrollArea/ScrollArea.js';
export { VisuallyHidden } from './VisuallyHidden/VisuallyHidden.js';
export { Portal, type PortalProps } from './Portal/Portal.js';
