export type Skill = {
  name: string;
  value: number;
};

export type RequiredSkill = {
  name: string;
  required: number;
};

export type SkillGap = {
  name: string;
  current: number;
  required: number;
  gap: number;
  priority: 'High' | 'Medium' | 'Low';
};

export function calculateSkillGaps(
  currentSkills: Skill[],
  requiredSkills: RequiredSkill[]
): SkillGap[] {
  return requiredSkills.map((requiredSkill) => {
    const currentSkill = currentSkills.find(
      (skill) =>
        skill.name.toLowerCase() === requiredSkill.name.toLowerCase()
    );

    const current = currentSkill?.value ?? 0;
    const gap = Math.max(requiredSkill.required - current, 0);

    let priority: 'High' | 'Medium' | 'Low' = 'Low';

    if (gap >= 30) {
      priority = 'High';
    } else if (gap >= 15) {
      priority = 'Medium';
    }

    return {
      name: requiredSkill.name,
      current,
      required: requiredSkill.required,
      gap,
      priority,
    };
  });
}