import { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/1_shared/libs/classNames/classNames';
import { Card } from '@/1_shared/ui/Card/Card';
import { HStack, VStack } from '@/1_shared/ui/Stack';
import { StarRating } from '@/1_shared/ui/StarRating/StarRating';
import { Modal } from '@/1_shared/ui/Modal/Modal';
import { Input } from '@/1_shared/ui/Input/Input';
import { Text } from '@/1_shared/ui/Text/Text';
import { Button, ButtonSize, ButtonTheme } from '@/1_shared/ui/Button/Button';
import { Drawer } from '@/1_shared/ui/Drawer/Drawer';

interface RatingCardProps {
  className?: string;
  title?: string;
  feedbackTitle?: string;
  hasFeedback?: boolean;
  onAccept?: (starsCount: number, feedback?: string) => void;
  onCancel?: (starsCount: number) => void;
}

export const RatingCard = memo((props: RatingCardProps) => {
  const { className, title, feedbackTitle, hasFeedback, onAccept, onCancel } = props;
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [starsCount, setStarsCount] = useState(0);
  const [feedback, setFeedback] = useState('');

  const onSelectStars = useCallback(
    (selectedStarsCount: number) => {
      setStarsCount(selectedStarsCount);
      if (hasFeedback) {
        setIsModalOpen(true);
      } else {
        onAccept?.(selectedStarsCount);
      }
    },
    [hasFeedback, onAccept]
  );

  const acceptHandler = useCallback(() => {
    setIsModalOpen(false);
    onAccept?.(starsCount, feedback);
  }, [starsCount, feedback, onAccept]);
  const cancelHandler = useCallback(() => {
    setIsModalOpen(false);
    onCancel?.(starsCount);
  }, [starsCount, onCancel]);

  const modalContent = (
    <>
      <Text title={feedbackTitle} />
      <Input value={feedback} onChange={setFeedback} placeholder={t('your feedback')} />
    </>
  );

  return (
    <Card className={classNames('', {}, [className])}>
      <VStack align="center" gap="8">
        <Text title={title} />
        <StarRating size={40} onSelect={onSelectStars} />
      </VStack>

      <BrowserView>
        <Modal isOpen={isModalOpen} lazy>
          <VStack align="center" gap="32">
            {modalContent}
            <HStack max gap="16" justify="end">
              <Button onClick={cancelHandler} theme={ButtonTheme.OUTLINE_RED}>
                {t('close')}
              </Button>
              <Button onClick={acceptHandler}>{t('send')}</Button>
            </HStack>
          </VStack>
        </Modal>
      </BrowserView>
      <MobileView>
        <Drawer isOpen={isModalOpen} lazy onClose={cancelHandler}>
          <VStack align="center" gap="32">
            {modalContent}
            <Button fullWidth onClick={acceptHandler} size={ButtonSize.L}>
              {t('send')}
            </Button>
          </VStack>
        </Drawer>
      </MobileView>
    </Card>
  );
});
