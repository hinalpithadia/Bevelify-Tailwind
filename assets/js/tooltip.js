/*==============tooltip==================*/
document.addEventListener('DOMContentLoaded', () => {
  const tooltipTriggers = document.querySelectorAll('.tooltip-trigger');

  tooltipTriggers.forEach(trigger => {
    const tooltip = trigger.nextElementSibling;

    const showTooltip = () => {
      tooltip.classList.remove('opacity-0', 'translate-y-2', 'invisible');
      tooltip.classList.add('opacity-100' , 'translate-y-0', 'visible');
    };

    const hideTooltip = () => {
      tooltip.classList.remove('opacity-100' , 'translate-y-0', 'visible');
      tooltip.classList.add('opacity-0', 'translate-y-2', 'invisible');
    };

    trigger.addEventListener('mouseenter', showTooltip);
    trigger.addEventListener('mouseleave', hideTooltip);
    trigger.addEventListener('focus', showTooltip);
    trigger.addEventListener('blur', hideTooltip);

    // Hide tooltip on click
    trigger.addEventListener('click', hideTooltip);
  });
});