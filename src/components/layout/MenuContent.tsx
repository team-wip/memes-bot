import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import TagRoundedIcon from '@mui/icons-material/TagRounded';
import Link from 'next/link'; // Import de Link de Next.js
import { useSelectedLayoutSegment } from 'next/navigation'

const mainListItems = [
  { text: 'Accueil', icon: <HomeRoundedIcon />, href: '/', segment: null },
  { text: 'Ajouter un meme 🤣', icon: <AddRoundedIcon />, href: '/addMeme', segment: 'addMeme' },
  { text: 'Gérer les tags', icon: <TagRoundedIcon />, href: '/tags', segment: 'tags' },
];

const secondaryListItems = [
  { text: 'Settings', icon: <SettingsRoundedIcon />, href: '/settings', segment: 'settings' },
  { text: 'About', icon: <InfoRoundedIcon />, href: '/about', segment: 'about' },
  { text: 'Feedback', icon: <HelpRoundedIcon />, href: '/feedback', segment: 'feedback' },
];

export default function MenuContent({ ...rest }) {
  const activeSegment = useSelectedLayoutSegment()
  console.log(activeSegment)

  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: 'space-between' }}>
      <List dense>
        {mainListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'block' }}>
            <Link href={item.href} passHref>
              <ListItemButton
                selected={activeSegment === item.segment}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
      <List dense>
        {secondaryListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'block' }}>
            <Link href={item.href} passHref>
              <ListItemButton
                selected={activeSegment === item.segment}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}