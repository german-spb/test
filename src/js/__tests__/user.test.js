import { loadUser, Player } from '../user';
import { httpGet } from '../http';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('should call loadUser once', () => {
  httpGet.mockReturnValue(JSON.stringify({}));

  const response = loadUser(1);
  expect(response).toEqual({});
  expect(httpGet).toHaveBeenCalledWith('http://server:8080/users/1');
});

test('player strength', () => {
  const player = { name: 'Маг', health: 90 };
  const result = Player(player);
  expect(result).toBe('healthy');
});
test('player strength for critical', () => {
  const player = { name: 'мечник', health: 10 };
  const result = Player(player);
  expect(result).toBe('critical');
});
test('player strength for wounded', () => {
  const player = { name: 'мечник', health: 40 };
  const result = Player(player);
  expect(result).toBe('wounded');
});
