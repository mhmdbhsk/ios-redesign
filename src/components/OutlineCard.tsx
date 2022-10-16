import { WrapperArrowShape } from '@/assets';
import { Box, createStyles, Group, Paper, Stack, Text } from '@mantine/core';
import { useRouter } from 'next/router';
import { FiArrowUpRight } from 'react-icons/fi';

const useStyles = createStyles((theme) => ({
  titleFont: {
    fontSize: 36,
    [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
      fontSize: 36,
    },
    [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
      fontSize: 32,
    },
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      fontSize: 24,
    },
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      fontSize: 22,
    },
    [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
      fontSize: 18,
    },
  },

  descriptionFont: {
    fontSize: 16,
    [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
      fontSize: 16,
    },
    [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
      fontSize: 16,
    },
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      fontSize: 16,
    },
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      fontSize: 14,
    },
    [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
      fontSize: 14,
    },
  },
}));

type OutlineCardProps = {
  title: string;
  description: string;
  link: string;
  color?: string;
};

const OutlineCard = ({ title, description, link, color }: OutlineCardProps) => {
  const { classes } = useStyles();
  const router = useRouter();

  return (
    <Paper
      radius={24}
      sx={{ padding: 32, background: color ?? '#B7C8FF', cursor: 'pointer' }}
      onClick={() => {
        router.push(link);
      }}
    >
      <Group position='apart'>
        <Stack spacing={0}>
          <Text className={classes.titleFont} weight='bold'>
            {title}
          </Text>
          <Text className={classes.descriptionFont}>{description}</Text>
        </Stack>

        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <WrapperArrowShape />
          <FiArrowUpRight
            style={{
              position: 'absolute',
              margin: 'auto auto',
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
            }}
          />
        </Box>
      </Group>
    </Paper>
  );
};

export default OutlineCard;