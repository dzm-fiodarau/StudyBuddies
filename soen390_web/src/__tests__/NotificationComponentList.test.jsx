import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import NotificationComponentList from '../components/NotificationComponentList';
import { GetNotification, removeNotification } from '../api/NotificationsApi';

jest.mock('../api/NotificationsApi', () => ({
    GetNotification: jest.fn().mockResolvedValue([
      {
        message: 'Test notification 1',
        category: 'test',
        logo: 'test.png',
        notificationID: 1,
      },
      {
        message: 'Test notification 2',
        category: 'test',
        logo: 'test.png',
        notificationID: 2,
      },
    ]),
    removeNotification: jest.fn().mockResolvedValue(true),
  }));

  
  describe('NotificationComponentList', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });
  
    //checks if notification is removed
    it('removes a notification when clicked', async () => {
        GetNotification.mockResolvedValueOnce([
          {
            notificationID: 1,
            message: 'Notification message 1',
            category: 'category 1',
            logo: 'notification logo 1',
          },
        ]);
        render(<NotificationComponentList />);
    
        await waitFor(() => {
          expect(GetNotification).toHaveBeenCalled();
        });
    
        await waitFor(() => {
          expect(removeNotification).not.toHaveBeenCalledWith(1);
          expect(GetNotification).toHaveBeenCalledTimes(2);
        });
      });
    });

describe('NotificationComponentList', () => {

    //checks if it renders the notificationcomponentlist with notifications and 
    // function handleremovenotification
  it('renders the NotificationComponentList with notifications and handleRemoveNotification', async () => {
    const notifications = [
      {
        notificationID: 1,
        message: 'Notification message 1',
        category: 'category 1',
        logo: 'notification logo 1',
      },
      {
        notificationID: 2,
        message: 'Notification message 2',
        category: 'category 2',
        logo: 'notification logo 2',
      },
    ];
    const handleRemoveNotification = jest.fn();
    GetNotification.mockResolvedValueOnce(notifications);

    render(
      <NotificationComponentList
        notifications={notifications}
        handleRemoveNotification={handleRemoveNotification}
      />
    );

    const notificationPageTitle = screen.getByText('Notification Center');
    expect(notificationPageTitle).toBeInTheDocument();
  });
});

describe('NotificationComponentList', () => {

    //checks if it displays a list of notifications
    it('displays a list of notifications', async () => {
        render(<NotificationComponentList />);
    });
    
    //checks if it shows no new notifications when there are no new notifs
    it('should display "No New Notification!" when there are no notifications', () => {
        render(<NotificationComponentList />);
        expect(screen.getByText('No New Notification!')).toBeInTheDocument();
    });

    //checks if notif is removed 
    it('should remove a notification when called upon', () => {
        jest.spyOn(JSON, 'parse').mockImplementation(() => ({ userId: 1 }));
        render(<NotificationComponentList />);
    });  
});
