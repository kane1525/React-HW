import { userData } from '../../mockData/userData';

export default function Modal({ user, setModal, info }) {
  const currentUser = userData.find((user) => user._id === info.currentUser);
  const properties = Object.entries(currentUser);
  const renderedProps = properties.map(([key, value]) => {
    if (
      typeof value === 'string' ||
      typeof value === 'number' ||
      typeof value === 'boolean'
    ) {
      return (
        <li key={key}>
          {key}: {value}
        </li>
      );
    }
  });
  return (
    <div
      className="modal"
      onClick={() => {
        setModal((prev) => ({ ...prev, show: false }));
      }}
    >
      <div className="modal-card">
        <ul>{renderedProps}</ul>
      </div>
    </div>
  );
}
