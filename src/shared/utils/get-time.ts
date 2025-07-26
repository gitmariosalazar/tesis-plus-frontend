function getTimeAgo(dateInput: string | Date): string {
  const now = new Date();
  const past = typeof dateInput === 'string' ? new Date(dateInput) : dateInput;
  const diff = Math.floor((now.getTime() - past.getTime()) / 1000); 

  if (isNaN(diff) || diff < 0) return 'in the future';

  const units = [
    { name: 'year', seconds: 31536000 },
    { name: 'month', seconds: 2592000 },
    { name: 'week', seconds: 604800 },
    { name: 'day', seconds: 86400 },
    { name: 'hour', seconds: 3600 },
    { name: 'minute', seconds: 60 },
    { name: 'second', seconds: 1 },
  ];

  for (const unit of units) {
    const count = Math.floor(diff / unit.seconds);
    if (count > 0) {
      return `ago ${count} ${unit.name}${count > 1 ? 's' : ''}`;
    }
  }

  return 'ago a few seconds';
}

export default getTimeAgo;