'use client';

import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Stack,
} from '@mui/material';
import { motion } from 'framer-motion';

interface RulesModalProps {
  open: boolean;
  onClose: () => void;
}

export const RulesModal: React.FC<RulesModalProps> = ({ open, onClose }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      sx={{
        '& .MuiDialog-paper': {
          borderRadius: '12px',
          backdropFilter: 'blur(10px)',
          m: { xs: 1.5, sm: 2 },
        },
      }}
    >
      <DialogTitle sx={{ 
        color: '#8b0000', 
        textAlign: 'center', 
        fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2rem' },
        pb: { xs: 1.5, sm: 2 }
      }}>
        What are the rules?
      </DialogTitle>
      <DialogContent>
        <Stack spacing={ { xs: 1.5, sm: 2 } } sx={{ mt: { xs: 1.5, sm: 2 } }}>
          <Typography 
            variant="body1" 
            sx={{ 
              fontWeight: 600,
              fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem' }
            }}
          >
            How to Play:
          </Typography>
          <Typography 
            variant="body2"
            sx={{
              fontSize: { xs: '0.85rem', sm: '0.95rem', md: '1rem' },
              lineHeight: { xs: 1.5, sm: 1.6, md: 1.7 }
            }}
          >
            • Rule 1: You get 12 seconds to find an answer before we reveal to each other
            <br />
            • Rule 2: Points are awarded for correct answers (correctness is decided by the other pook)
            <br />
            • Rule 3: Only the quiz master (AKA me) will assign points because I'm the boss
            <br />
            • Rule 4: There is no rule 4. May the best pookie win...
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              fontWeight: 600, 
              mt: { xs: 2, sm: 3 },
              fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem' }
            }}
          >
            The Stakes:
          </Typography>
          <Typography 
            variant="body2"
            sx={{
              fontSize: { xs: '0.85rem', sm: '0.95rem', md: '1rem' },
              lineHeight: { xs: 1.5, sm: 1.6, md: 1.7 }
            }}
          >
            The winner gets one (1) wish that the loser has to follow! No ifs or buts!
          </Typography>
        </Stack>
      </DialogContent>
      <DialogActions sx={{ 
        p: { xs: 1.5, sm: 2 }, 
        justifyContent: 'center', 
        gap: { xs: 0.5, sm: 1 },
      }}>
        <Button
          onClick={onClose}
          variant="contained"
          color="primary"
          sx={{ 
            borderRadius: '8px',
            fontSize: { xs: '0.9rem', sm: '1rem' },
            px: { xs: 3, sm: 4 },
            py: { xs: 0.8, sm: 1 }
          }}
        >
          Agree!
        </Button>
      </DialogActions>
    </Dialog>
  );
};


