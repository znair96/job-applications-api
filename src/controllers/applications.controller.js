const { eq } = require("drizzle-orm");
const db = require("../db");
const { applicationsTable } = require("../models/applications.schema");

exports.getApplications = async (req, res) => {
  const result = await db.select().from(applicationsTable);
  return res.json({
    success: true,
    count: result.length,
    applications: result,
  });
};

exports.getApplicationById = async (req, res) => {
  const paramId = req.params.id;
  if (!paramId) {
    return res.status(400).json({
      error: "Job Id is missing...",
    });
  }
  try {
    const [result] = await db
      .select()
      .from(applicationsTable)
      .where(eq(applicationsTable.id, paramId));
    return res.json({
      job: result,
    });
  } catch (e) {
    return res.status(404).json({
      success: false,
      message: "Application not found",
    });
  }
};

exports.createApplication = async (req, res) => {
  const { company, position, location, jobType, salary, appliedDate, notes } =
    req.body;
  try {
    const [result] = await db
      .insert(applicationsTable)
      .values({
        company,
        position,
        location,
        jobType,
        salary,
        appliedDate,
        notes,
      })
      .returning({
        id: applicationsTable.id,
      });
    return res.json({ message: "Application Created Successfully...", result });
  } catch (error) {
    console.log(error);
  }
};

exports.updateApplication = async (req, res) => {
  const paramId = req.params.id;
  if (!paramId) {
    return res.status(400).json({
      error: "Job Id is missing...",
    });
  }
  try {
    await db
      .update(applicationsTable)
      .set(req.body)
      .where(eq(applicationsTable.id, paramId));
    return res.json({
      message: "Data updated successfully...",
    });
  } catch (e) {
    return res.status(404).json({
      error: `Job Application with ${paramId} not found...`,
    });
  }
};

exports.deleteApplication = async (req, res) => {
  const paramId = req.params.id;
  if (!paramId) {
    return res.status(400).json({
      error: "Job Id is missing...",
    });
  }
  try {
    await db.delete(applicationsTable).where(eq(applicationsTable.id, paramId));
    return res.json({
      message: `${paramId} deleted successfully`,
    });
  } catch (e) {
    return res.status(404).json({
      error: `Job Application with ${paramId} not found...`,
    });
  }
};
