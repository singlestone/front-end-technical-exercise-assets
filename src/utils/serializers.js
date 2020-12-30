export const serializeSteps = steps =>
  [...steps]
    .sort((step1, step2) => step1.stepNumber - step2.stepNumber)
    .map(step => {
      step.versionContent.sort(
        (version1, version2) =>
          new Date(version2.effectiveDate) - new Date(version1.effectiveDate)
      )

      return {
        id: step.id,
        stepNumber: step.stepNumber,
        ...step.versionContent[0]
      }
    })
