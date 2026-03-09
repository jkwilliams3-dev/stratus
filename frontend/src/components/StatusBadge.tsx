import type { ItemStatus } from '../types';

const styles: Record<ItemStatus, { bg: string; color: string; label: string }> = {
  active:   { bg: 'rgba(0,200,81,0.12)', color: '#00c851', label: 'Active' },
  inactive: { bg: 'rgba(255,71,87,0.12)', color: '#ff4757', label: 'Inactive' },
  archived: { bg: 'rgba(136,146,164,0.12)', color: '#8892a4', label: 'Archived' },
};

export default function StatusBadge({ status }: { status: ItemStatus }) {
  const s = styles[status];
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '5px',
        padding: '2px 8px',
        borderRadius: '9999px',
        fontSize: '12px',
        fontWeight: 600,
        background: s.bg,
        color: s.color,
      }}
    >
      <span
        style={{
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          background: s.color,
        }}
      />
      {s.label}
    </span>
  );
}
