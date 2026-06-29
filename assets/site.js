const filterButtons = document.querySelectorAll('[data-filter]');
const projectCards = document.querySelectorAll('[data-project-tags]');
filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((b) => b.classList.remove('active'));
    button.classList.add('active');
    projectCards.forEach((card) => {
      const tags = card.dataset.projectTags.split(',');
      card.style.display = filter === 'all' || tags.includes(filter) ? '' : 'none';
    });
  });
});

const roleButtons = document.querySelectorAll('[data-role]');
const roleOutput = document.querySelector('[data-role-output]');
const roleCopy = {
  sre: 'Staff SRE focused on reliability, incident response, observability, toil reduction, and AI-assisted support workflows across cloud platforms.',
  platform: 'Platform engineer who builds paved roads: policy-as-code, self-service workflows, reusable infrastructure patterns, and developer enablement.',
  cloud: 'Cloud infrastructure engineer with deep GCP, Kubernetes/OpenShift, Terraform, IAM, VPC, and secure-by-default platform experience.',
  security: 'Platform security engineer who converts risk signals into guardrails, exceptions, attack-path narratives, and practical engineering actions.'
};
roleButtons.forEach((button) => {
  button.addEventListener('click', () => {
    roleButtons.forEach((b) => b.classList.remove('active'));
    button.classList.add('active');
    if (roleOutput) roleOutput.textContent = roleCopy[button.dataset.role];
  });
});

const copyButtons = document.querySelectorAll('[data-copy]');
copyButtons.forEach((button) => {
  button.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(button.dataset.copy);
      const original = button.textContent;
      button.textContent = 'Copied';
      setTimeout(() => button.textContent = original, 1400);
    } catch (e) {
      button.textContent = 'Copy failed';
    }
  });
});
